import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ variant, children, statusCode }) => {
	return (
		<Alert variant={variant}>
			<Alert.Heading>{statusCode} status code</Alert.Heading>
			<p>children</p>
		</Alert>
	);
};

Message.defaultProps = {
	variant: 'danger',
};

export default Message;
