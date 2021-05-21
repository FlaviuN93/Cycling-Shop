// class used to catch all operational errors

class AppError extends Error {
	constructor(message, statusCode) {
		super(message);
		this.statusCode = statusCode;
		this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
		this.isOperational = true;
		// only send operational errors back to the client which have this boolean value true

		//capturing the stack trace helps us identify where the error occured in the code
	}
}

export default AppError;
