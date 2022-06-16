import { useContext } from 'react';
import Context from '../state/GlobalContext';
import Day from './Day';
import './Month.scss';

function Month({ monthArray }) {
	const state = useContext(Context);
	let dayDisplay = [];
	//loop through the monthArray and for each day, produce a day component with the item data passed onto it.
	monthArray.forEach((item) => {
		dayDisplay.push(<Day key={item.day} item={item} />);
	});

	return (
		<div className='month'>
			<h4 className='month__title'>
				{monthArray[0] ? state.matchNumberToMonth(monthArray[0].month) : ''}
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
