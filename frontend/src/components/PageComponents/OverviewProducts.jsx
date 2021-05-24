import React from 'react';
import Card from '../SharedComponents/Card';
import './OverviewProducts.scss';

const OverviewProducts = () => {
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
			<Card className={`card_product`}>
				<div className='card_product-img'>
					<img src='' alt='bike' />
				</div>
				<h4 className='card_bike-name'>Bikes</h4>
				<p>Rating</p>
				<p>price</p>
			</Card>
		</div>
	);
};

export default OverviewProducts;
