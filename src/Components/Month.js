import React, { useState } from 'react';
import './Month.scss';
import rain from '../assets/rain.png';
import sun from '../assets/sun.png';
import Context from '../state/GlobalContext';
import { useContext } from 'react';

function Month(props) {
	const state = useContext(Context);

	let dayDisplay = [];
	function displayBanner(item) {
		state.setBannerDisplay(
			<p>
				{item.month} {item.day} {item.weather}
			</p>
		);
	}
	props.value.forEach((item) => {
		dayDisplay.push(
			<div
				className='month__container__day-container__day'
				key={item.day}
				onClick={() => {
					displayBanner(item);
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
				{(() => {
					if (props.value[0]) {
						switch (props.value[0].month) {
							case 1:
								return 'January';
							case 2:
								return 'February';
							case 3:
								return 'March';
							case 4:
								return 'April';
							case 5:
								return 'May';
							case 6:
								return 'June';
							case 7:
								return 'July';
							case 8:
								return 'August';
							case 9:
								return 'September';
							case 10:
								return 'October';
							case 11:
								return 'November';
							case 12:
								return 'December';
							default:
								return 'Month';
						}
					}
				})()}
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
