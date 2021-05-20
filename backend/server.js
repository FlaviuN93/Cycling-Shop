import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';

dotenv.config();
connectDB();
const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
	res.send('API is Running');
});

app.get('/api/users', (req, res) => {
	res.send(users);
});

const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
	)
);
