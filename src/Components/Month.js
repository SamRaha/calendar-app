import { useContext } from 'react';
import Context from '../state/GlobalContext';
import Day from './Day';
import './Month.scss';

function Month(props) {
	const state = useContext(Context);
	let dayDisplay = [];

	props.value.forEach((item) => {
		dayDisplay.push(
			<div>
				<Day item={item} />{' '}
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
