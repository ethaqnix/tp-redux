/***************************************
** O-rizon development
** Created by Bastien Cecere
** 20/07/2017 - 18:31
** Carre.js
** 2017 - All rights reserved
***************************************/

import React from 'react'

const Carre = ({color, children, onClick = () => null}) => {
	const styles = {
		border: '1px solid black',
		display: 'flex',
		flex: '1 1',
		backgroundColor: color,
		justifyContent: 'center',
		alignItems: 'center'
	};
	return (
		<div style={styles} onClick={onClick}>
			{children}
		</div>
	)
};

export default Carre
