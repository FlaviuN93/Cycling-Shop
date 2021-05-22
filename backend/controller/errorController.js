import AppError from '../utils/appError.js';

const handleCastErrorDB = (err) => {
	const message = `Invalid ${err.path}: ${err.value}.`;
	return new AppError(message, 400);
};

const handleDuplicateErrorDB = (err) => {
	const value = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];
	const message = `Duplicate value: ${value}. Please write a different value.`;
	return new AppError(message, 400);
};

const handleValidationErrorDB = (err) => {
	const errors = Object.values(err.errors).map((error) => error.message);
	const message = `Invalid input data. ${errors.join('. ')}`;
	return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
	res.status(err.statusCode).json({
		status: err.status,
		message: err.message,
		stack: err.stack,
		error: err,
	});
};

const sendErrorProd = (err, res) => {
	// Only operational errors are sent with more information to the client
	if (err.isOperational) {
		res.status(err.statusCode).json({
			status: err.status,
			message: err.message,
		});
	}
	// Generic message is sent to the client for programming or unknown errors.
	else {
		//Log error
		console.error('ERROR! Check for possible typeErrors or bugs in code.', err);

		res.status(500).json({
			status: 'error',
			message: 'Something went very wrong! Try again later.',
		});
	}
};

export const globalErrorHandler = (err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	err.status = err.status || 'error';

	if (process.env.NODE_ENV === 'development') {
		sendErrorDev(err, res);
	} else if (process.env.NODE_ENV === 'production') {
		let error = { ...err };

		if (err.name === 'CastError') error = handleCastErrorDB(error);
		if (err.code === 11000) error = handleDuplicateErrorDB(error);
		if (err.name === 'ValidationError') error = handleValidationErrorDB(error);

		sendErrorProd(error, res);
	}
};
