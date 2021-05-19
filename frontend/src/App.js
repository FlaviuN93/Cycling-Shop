import HomePage from './pages/HomePage';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
	return (
		<Router>
			<main className='main'>
				<div className='container'>
					<Route path='/' component={HomePage} />

					<h2>Hi</h2>
					<h3>h4</h3>
				</div>
			</main>
		</Router>
	);
}

export default App;
