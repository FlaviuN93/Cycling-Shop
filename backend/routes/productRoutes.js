import express from 'express';
import Product from '../models/product.model.js';

const router = express.Router();

// @description Fetch all products
// @route     Get /api/products
// @access Public

router.get('/', async (req, res) => {
	const products = await Product.find({});
	res.json(products);
});

// @description Fetch product by Id
// @route     Get /api/products/:id
// @access Public

router.get('/:id', async (req, res) => {
	const product = await Product.findById(req.params.id);
	if (product) {
		res.json(product);
	} else {
		res.status(404).json({ message: 'Product not found' });
	}
});
export default router;
