import React, { useEffect, useState } from 'react';

import Header from '../components/PageComponents/Header';
import OverviewProducts from '../components/PageComponents/OverviewProducts';

const HomePage = () => {
	return (
		<>
			<Header />
			<OverviewProducts />
		</>
	);
};

export default HomePage;
