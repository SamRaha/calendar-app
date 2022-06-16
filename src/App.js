import './App.scss';
import useMockWeatherData from './hooks/useMockWeatherData';
import Landing from './Pages/Landing';
import { ContextProvider } from './state/GlobalContext';

function App() {
	const weatherData = useMockWeatherData(2021);
	return (
		<div className='App'>
			<ContextProvider>
				<Landing weatherData={weatherData} />
			</ContextProvider>
		</div>
	);
}

export default App;
