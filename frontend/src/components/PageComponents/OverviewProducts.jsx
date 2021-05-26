import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../../redux/productsReducer/product.action';

import Card from '../SharedComponents/Card';
import FlexContainer from '../SharedComponents/FlexContainer';
import Rating from '../UIComponents/Rating';
import LoadingSpinner from '../UIComponents/LoadingSpinner';
import Message from '../UIComponents/Message';
import './OverviewProducts.scss';

const OverviewProducts = () => {
	const dispatch = useDispatch();
	const { products, loading, error } = useSelector(
		(state) => state.productList
	);
	useEffect(() => {
		dispatch(getProductList());
	}, [dispatch]);

	return (
		<div className='products'>
			<div className='products--title'>
				<h2>Our Products</h2>
			</div>
			<div className='products--subtitle'>
				<h4>Most Recent</h4>
				<h4>Best Selled</h4>
				<h4>Most Viewed</h4>
			</div>
			{loading ? (
				<LoadingSpinner />
			) : error ? (
				<Message>{error}</Message>
			) : (
				<FlexContainer>
					{products.map(
						(product, index) =>
							index < 5 && (
								<Card className={`card_product`} key={product._id}>
									<div className='card_product-img'>
										<img src={product.cardImage} alt='bike' className='img' />
									</div>
									<p className='card_product-name'>{product.name}</p>
									<Rating value={product.rating} />
									<p>price</p>
								</Card>
							)
					)}
				</FlexContainer>
			)}
		</div>
	);
};

export default OverviewProducts;
