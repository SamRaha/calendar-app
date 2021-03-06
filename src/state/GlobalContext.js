import { createContext, useState } from 'react';

export const ContextProvider = ({ children }) => {
	const [banner, setBanner] = useState(null);
	const [recede, setRecede] = useState(null);

	//function that takes in a number and outputs the coresponding month in string format. This is being used twice in my app on different files, and therefore made sense to put it on the global state.
	const matchNumberToMonth = (number) => {
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
	};

	return (
		<Context.Provider
			value={{
				banner,
				setBanner,
				matchNumberToMonth,
				recede,
				setRecede,
			}}
		>
			{children}
		</Context.Provider>
	);
};
const Context = createContext();
export default Context;
