import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/user.model.js';
import Product from './models/product.model.js';
import Order from './models/order.model.js';
import connectDB from './config/db.js';

dotenv.config();
await connectDB();

// Import all data to collections

const importData = async () => {
	try {
		await User.create(users);
		await Product.create(products);

		console.log('Data imported'.green.inverse);
		process.exit();
	} catch (error) {
		console.error(error.message.red.inverse);
		process.exit(1);
	}
};

// Delete all data from collections
const deleteData = async () => {
	try {
		await Order.deleteMany();
		await User.deleteMany();
		await Product.deleteMany();
		console.log('Data successfully deleted!'.green.inverse);
		process.exit();
	} catch (err) {
		console.error(err.message.red.inverse);
		process.exit(1);
	}
};

if (process.argv[2] === '--import') {
	importData();
} else if (process.argv[2] === '--delete') {
	deleteData();
}
