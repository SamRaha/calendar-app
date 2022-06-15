import React, { useState } from 'react';
import './Month.scss';
import rain from '../assets/rain.png';
import sun from '../assets/sun.png';
import Context from '../state/GlobalContext';
import { useContext } from 'react';

function Month(props) {
	const state = useContext(Context);
	let dayDisplay = [];

	props.value.forEach((item) => {
		dayDisplay.push(
			<div
				className='month__container__day-container__day'
				key={item.day}
				onClick={() => {
					state.setBannerDate(item.day);
					state.setBannerMonth(item.month);
					state.setBannerWeather(item.weather);
				}}
			>
				<img src={item.weather === 'rainy' ? rain : sun} alt='rain' />
				<div className='month__container__day-container__day__line'></div>
			</div>
		);
	});

	return (
		<div className='month'>
			<h4 className='month__title'>
				{props.value[0] ? state.matchNumberToMonth(props.value[0].month) : ''}
			</h4>
			<div className='month__container'>
				<div className='month__container__day-labels'>
					<p>M</p>
					<p>T</p>
					<p>W</p>
					<p>T</p>
					<p>F</p>
					<p>S</p>
					<p>S</p>
				</div>
				<div className='month__container__day-container'>{dayDisplay}</div>
			</div>
		</div>
	);
}

export default Month;
