import React from 'react';

const Notification = ({showNotification}) => {
	return (
		<div className={`notification-container ${showNotification?'show':''}`}>
		    <p>You Already Enter This Letter </p>
		</div>
	);
}

export default Notification;