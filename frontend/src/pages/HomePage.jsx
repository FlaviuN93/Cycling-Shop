import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

import Header from '../components/PageComponents/Header';

import LoadingSpinner from '../components/UIComponents/LoadingSpinner';
import OverviewProducts from '../components/PageComponents/OverviewProducts';

const HomePage = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get('/api/products');
			console.log(data);
			setProducts(data);
		};
		fetchProducts();
	}, []);

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
