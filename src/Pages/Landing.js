import { getByDisplayValue } from '@testing-library/react';
import React, { useState } from 'react';
import Month from '../Components/Month';
import './Landing.scss';
import Context from '../state/GlobalContext';
import { useContext } from 'react';

function Landing({ weatherData }) {
	const state = useContext(Context);
	//create conditional UI display array
	let display = [];
	//create data array that has 12 months worth of data
	let monthArray = {};
	for (let i = 0; i < 12; i++) {
		monthArray[i + 1] = [];
		// = {
		//     1: [],
		//     2: [],
		//     3: [],
		//     4: [],
		//     5: [],
		//     6: [],
		//     7: [],
		//     8: [],
		//     9: [],
		//     10: [],
		//     11: [],
		//     12: [],
		// };
	}
	//check if there is weather data due to the useeffect, it will be undefined on the first run, and then do this.
	weatherData &&
		weatherData.forEach((item) => {
			monthArray[item.month].push(item);
		});
	// console.log("monthArray: ", monthArray);
	//loop through the monthArray and add a month UI component with props passed down to it
	Object.keys(monthArray).forEach((item, index) => {
		display.push(<Month value={monthArray[item]} key={index} />);
	});
	return (
		<div className='landing'>
			{display}
			<div className='landing__banner'>{state.bannerDisplay}</div>
		</div>
	);
}

export default Landing;
