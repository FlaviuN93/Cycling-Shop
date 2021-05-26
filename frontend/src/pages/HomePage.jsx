import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

import Header from '../components/PageComponents/Header';
import LoadingSpinner from '../components/UIComponents/LoadingSpinner';
import OverviewProducts from '../components/PageComponents/OverviewProducts';
import { getProductList } from '../redux/productsReducer/product.action';

const HomePage = () => {
	const dispatch = useDispatch();
	const { products } = useSelector((state) => state.productList);
	useEffect(() => {
		dispatch(getProductList());
	}, [dispatch]);

	return (
		<>
			<LoadingSpinner />
			<Header />
			<OverviewProducts />
			<Row>
				{products.map(
					(product, index) =>
						index < 5 && (
							<Col key={product.id}>
								<h3>{product.name}</h3>
							</Col>
						)
				)}
			</Row>
		</>
	);
};

export default HomePage;
