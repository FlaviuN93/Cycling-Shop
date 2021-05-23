import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import AppError from './utils/appError.js';
import { globalErrorHandler } from './controller/errorController.js';

process.on('uncaughtException', (err) => {
	console.log('Uncaught Exception! Shutting down...');
	console.log(err.name, err.message);

	process.exit(1);
});

dotenv.config();
connectDB();
const app = express();
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.all('*', (req, res, next) => {
	next(new AppError(`Can't find ${req.originalUrl} on this website!`, 404));
});

app.use(globalErrorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
	)
);

process.on('unhandledRejection', (err) => {
	console.log(err.name, err.message);
	console.log('Unhandled Rejection! Shutting down...');
	server.close(() => {
		process.exit(1);
	});
});
