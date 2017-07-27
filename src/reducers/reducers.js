/***************************************
 ** O-rizon development
 ** Created by Bastien Cecere
 ** 20/07/2017 - 18:27
 ** reducers.js
 ** 2017 - All rights reserved
 ***************************************/

import { combineReducers } from 'redux'
import getRandomColor from 'randomcolor'


const initialState = {
	size: 4,
	carres: [
		{
			color: getRandomColor()
		},
		{
			color: getRandomColor()
		},
		{
			color: getRandomColor()
		},
		{
			color: getRandomColor()
		}
	]
};

const AppReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE_UP_LEFT": {
			return {
				size: state.size,
				carres: state.carres.map((carree, i) => {
					return (i === 0 ? { color: getRandomColor() } : carree);
				})
			}
		}
		case "CHANGE_DOWN_LEFT": {
			return {
				size: state.size,
				carres: state.carres.map((carree, i) => {
					return (i === state.carres.length - 2 ? { color: getRandomColor() } : carree);
				})
			}
		}
		case "SWITCH_ALL_TO_DOWN_LEFT": {
			return {
				size: state.size,
				carres: state.carres.map(() => {
					return ({ color: state.carres[state.carres.length - 2].color });
				})
			}
		}
		case "CHANGE_SIZE": {
			return {
				size: state.size,
				carres: Array.apply(null, {length: action.value}).map(() => {
					return ({ color: getRandomColor() });
				})
			}
		}
		default:
			return state;
	}
};

const reducers = combineReducers({
	AppReducer
});

export default reducers