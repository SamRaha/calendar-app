import { createContext, useState } from 'react';

export function ContextProvider({ children }) {
	const [bannerDate, setBannerDate] = useState([]);
	const [bannerMonth, setBannerMonth] = useState([]);
	const [bannerWeather, setBannerWeather] = useState([]);
	const [bannerDisplayNone, setBannerDisplayNone] = useState(true);
	const [recede, setRecede] = useState(null);

	function matchNumberToMonth(number) {
		switch (number) {
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
				return '';
		}
	}

	return (
		<Context.Provider
			value={{
				bannerDate,
				setBannerDate,
				bannerMonth,
				setBannerMonth,
				bannerWeather,
				setBannerWeather,
				matchNumberToMonth,
				bannerDisplayNone,
				setBannerDisplayNone,
				recede,
				setRecede,
			}}
		>
			{children}
		</Context.Provider>
	);
}
const Context = createContext();
export default Context;
