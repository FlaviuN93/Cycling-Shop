import mongoose from 'mongoose';
import validator from 'validator';

// name, email, photo, password, confirmPassword

const UserSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'A User must have a name'],
		minlength: [4, 'A User name has to have a minimum of 4 characters'],
		maxlength: [20, 'A User name has to have a maximum of 20 characters'],

		// validate: [
		// 	validator.isAlphanumeric,
		// 	'A User name must only contain alphabetic characters or numbers',
		// ],
	},
	email: {
		type: String,
		required: [true, 'A User must have an email'],
		// unique: true,
		lowercase: true,
		validate: [validator.isEmail, 'Please provide a valid email'],
	},
	photo: {
		type: String,
		default: 'default.jpg',
	},
	password: {
		type: String,
		required: [true, 'A User must have a password'],
		minlength: [7, 'A User password must have minimum of 7 characters'],
		select: false,
	},
	passwordConfirm: {
		type: String,
		// validate: {
		// 	validator: function (pass) {
		// 		return pass === this.password;
		// 	},
		// 	message: 'Passwords are not the same!',
		// },
	},
});

const User = mongoose.model('User', UserSchema);
export default User;
