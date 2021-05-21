import express from 'express';
import users from '../data/users.js';
import User from '../models/user.model.js';

const router = express.Router();

// @description Fetch all users
// @route     Get /api/users
// @access Public

router.get('/', async (req, res) => {
	const users = await User.find({});
	res.json(users);
});

export default router;
