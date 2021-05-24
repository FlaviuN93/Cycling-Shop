import express from 'express';
import Product from '../models/product.model.js';
import AppError from '../utils/appError.js';
import catchAsync from '../utils/catchAsync.js';

// @description Fetch all products
// @route     Get /api/products
// @access Public

export const getProducts = catchAsync(async (req, res, next) => {
	const products = await Product.find({});
	res.json(products);
});

// @description Fetch product by Id
// @route     Get /api/products/:id
// @access Public

export const getProductById = catchAsync(async (req, res, next) => {
	const product = await Product.findById(req.params.id);
	if (!product) return next(new AppError('Product not found', 404));

	res.json(product);
});
