import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

import Header from '../components/Header';

const HomePage = () => {
	const [users, setUsers] = useState([]);

	// useEffect(() => {
	// 	const fetchUsers = async () => {
	// 		const { data } = await axios.get('/api/users');
	// 		console.log(data);
	// 		setUsers(data);
	// 	};
	// 	fetchUsers();
	// }, []);

	return (
		<>
			<Header />
			<Row>
				{users.map((user) => (
					<Col key={user.id}>
						<h3>{user.name}</h3>
					</Col>
				))}
			</Row>
		</>
	);
};

export default HomePage;
