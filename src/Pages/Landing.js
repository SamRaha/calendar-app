import { useContext } from 'react';
import rain from '../assets/rain.png';
import sun from '../assets/sun.png';
import Month from '../Components/Month';
import Context from '../state/GlobalContext';
import './Landing.scss';

const Landing = ({ weatherData }) => {
	const state = useContext(Context);
	//create conditional UI display array
	let display = [];
	//create  data array that has 12 months worth of data
	let monthArray = {};

	//loop through 12 times and add an empty value to each key
	for (let i = 0; i < 12; i++) {
		monthArray[i + 1] = [];
		//return something like this:
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
	//loop through the monthArray and add a month UI component with props passed down to it
	Object.keys(monthArray).forEach((item, index) => {
		display.push(<Month monthArray={monthArray[item]} key={index} />);
	});
	console.log('state.banner: ', state.banner);
	return (
		<div className='landing'>
			<div className='landing__calendar'>{display}</div>

			{state.banner ? (
				<div className='landing__banner'>
					<div
						className='landing__banner__cross'
						//when the x is clicked, it sets the banner to display none.
						onClick={() => {
							state.setBanner(null);
						}}
					>
						<p>x</p>
					</div>
					<img
						src={
							state.banner.weather === 'rainy'
								? rain
								: state.banner.weather === 'sunny'
								? sun
								: ''
						}
						alt=''
					/>
					<h2>
						{state.banner.day}{' '}
						{state.banner.month ? state.matchNumberToMonth(state.banner.month) : 0}
					</h2>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default Landing;
