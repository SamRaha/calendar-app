import { useContext } from 'react';
import rain from '../assets/rain.png';
import sun from '../assets/sun.png';
import Context from '../state/GlobalContext';
import './Day.scss';

const Day = ({ item }) => {
	const state = useContext(Context);
	return (
		<div
			className={`day-container__day ${
				state.recede === 'sunny' && item.weather === 'rainy'
					? `recede`
					: state.recede === 'rainy' && item.weather === 'sunny'
					? `recede`
					: ``
			}`}
			key={item.day}
			//when the mouse enters, you set the classname for changing the opacity of the other weather types to 0.5
			onMouseEnter={() => {
				state.setRecede(item.weather);
			}}
			//reset when mouse leaves
			onMouseLeave={() => {
				state.setRecede(null);
			}}
			//when clicked, it sets the banner UI to show, and passes the relevant information to it.
			onClick={() => {
				state.setBanner(item);
			}}
		>
			<img src={item.weather === 'rainy' ? rain : sun} alt='rain' />
			<div className='day-container__day__line'></div>
		</div>
	);
};

export default Day;
