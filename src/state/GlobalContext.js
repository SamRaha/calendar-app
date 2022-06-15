import { createContext, useState } from 'react';

export function ContextProvider({ children }) {
	const [bannerDisplay, setBannerDisplay] = useState([]);
	return (
		<Context.Provider value={{ bannerDisplay, setBannerDisplay }}>{children}</Context.Provider>
	);
}
const Context = createContext();
export default Context;
