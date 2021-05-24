import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';
import './App.scss';

function App() {
	return (
		<Router>
			<main className='main'>
				<div className='main_container'>
					<Route path='/' component={HomePage} />

					<h2>Hi</h2>
					<h3>h4</h3>
				</div>
			</main>
		</Router>
	);
}

export default App;
