import React from 'react';
import './Card.scss';

const Card = ({ className, children }) => {
	return (
		<div className='card_container'>
			<div className={`card ${className}`}>{children}</div>
		</div>
	);
};

export default Card;
