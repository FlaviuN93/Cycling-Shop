import express from 'express';
import catchAsync from '../utils/catchAsync.js';
import User from '../models/userModel.js';

// @description Fetch all users
// @route     Get /api/users
// @access Public

export const getAllUsers = catchAsync(async (req, res, next) => {
	const users = await User.find({});
	res.json(users);
});
