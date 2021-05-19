import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
	return (
		<header className='header'>
			<h3 className='header__logo'>
				<Link to='/'>
					<strong style={{ color: '#ff6600', fontWeight: 'lighter' }}>
						CITY
					</strong>
					BIKE
				</Link>
			</h3>

			<ul className='header__ul'>
				<li>
					<Link to='#'>HOME</Link>
				</li>
				<li>
					<Link to='#'>
						SHOP <i className='fas fa-chevron-down'></i>
					</Link>
				</li>{' '}
				<li>
					<Link to='#'>OFFERS</Link>
				</li>{' '}
				<li>
					<Link to='#'>CONTACT</Link>
				</li>{' '}
				<li>
					<Link to='#'>ABOUT US</Link>
				</li>
				<li>
					<Link to='#'>
						<i className='fas fa-user-circle icon'></i>
					</Link>
				</li>
				<li>
					<Link to='#'>
						<i className='fas fa-shopping-cart icon'></i>
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
