import { useContext } from 'react';
import rain from '../assets/rain.png';
import sun from '../assets/sun.png';
import Context from '../state/GlobalContext';
import './Day.scss';

function Day({ item }) {
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
			onMouseEnter={() => {
				state.setRecede(item.weather);
			}}
			onMouseLeave={() => {
				state.setRecede(null);
			}}
			onClick={() => {
				state.setBannerDate(item.day);
				state.setBannerMonth(item.month);
				state.setBannerWeather(item.weather);
				state.setBannerDisplayNone(false);
			}}
		>
			<img src={item.weather === 'rainy' ? rain : sun} alt='rain' />
			<div className='day-container__day__line'></div>
		</div>
	);
}

export default Day;
