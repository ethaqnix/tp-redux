/***************************************
** O-rizon development
** Created by Bastien Cecere
** 23/07/2017 - 16:43
** actions.js
** 2017 - All rights reserved
***************************************/

export const changeUpLeft = () => ({
	type: "CHANGE_UP_LEFT",
});

export const changeDownLeft = () => ({
	type: "CHANGE_DOWN_LEFT",
});


export const switchAllToDownLeft = () => ({
	type: "SWITCH_ALL_TO_DOWN_LEFT",
});

export const changeSize = (newSize) => ({
	type: "CHANGE_SIZE",
	value: newSize
});