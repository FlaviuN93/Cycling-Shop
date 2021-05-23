import mongoose from 'mongoose';

const connectDB = async () => {
	const db = await mongoose.connect(process.env.MONGO_URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
	});

	console.log(`MongoDB Connected: ${db.connection.host}`.cyan.underline);
};

export default connectDB;
