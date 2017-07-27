//import './styles/App.css'

import React from 'react'
import { connect } from 'react-redux'
import Carre from './Carre'
import {
	changeDownLeft,
	changeSize,
	changeUpLeft,
	switchAllToDownLeft
} from "../actions/actions";

const AppComponent = ({ carres, onChangeUpLeft, onChangeDownLeft, onSwitchAllToDownLeft, onChangeSize }) => {
	console.log(carres);
	const styles = {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		margin: '0 0'
	};
	const stylesTab = {
		display: 'flex',
		flexDirection: 'row',
		flex: '1 1',
		height: '50%'
	};

	return (
		<div style={styles}>
			<input type="number" step="2" onChange={onChangeSize}></input>
				{
					Array.from(Array(carres.length / 2).keys()).map((_, i) => {
						let action;
						const tab = carres.map((e, i) => {
							switch (i) {
								case 0: action = onChangeUpLeft; break;
								case 1: action = onChangeDownLeft; break;
								case carres.length - 2: action = onSwitchAllToDownLeft; break;
								default : action = () => null;
							}
							return <Carre key={'carre' + i} color={e.color} onClick={action.bind(this)}>{e.color}</Carre>;
						});
						return (
							<div key={'subdivider' + i} style={stylesTab}>
								{
									tab.slice(i * 2, i * 2 + 2)
								}
							</div>
						)
					})
				}
		</div>
	);
};

const mapStateToProps = ({ AppReducer }) => ({
	...AppReducer
});

const mapDispatchToProps = dispatch => ({
	onChangeUpLeft: () => {
		dispatch(changeUpLeft())
	},
	onChangeDownLeft: () => {
		dispatch(changeDownLeft())
	},
	onSwitchAllToDownLeft: () => {
		dispatch(switchAllToDownLeft())
	},
	onChangeSize: (newSize) => {
		if (newSize.target.value % 2 === 0 && newSize.target.value < 101) {
			dispatch(changeSize(newSize.target.value))
		}
	}
});

const App = connect(
	mapStateToProps,
	mapDispatchToProps
)(AppComponent);

export default App
