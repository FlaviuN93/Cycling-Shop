import React from 'react';
import './FlexContainer.scss';

const FlexContainer = (props) => {
	return <div className='flex-container'>{props.children}</div>;
};

export default FlexContainer;
