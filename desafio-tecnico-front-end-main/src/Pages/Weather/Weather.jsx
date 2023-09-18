import { useEffect, useState } from 'react';
import useGeo from '../../hooks/useGeo.js';
import axios from 'axios';
import { Title, WeatherContainer } from './styles.js';
import Search from '../../components/Search/Search.jsx';
import Dashboard from '../../components/Dashboard/Dashboard.jsx';
import Graphic from '../../components/Graphic/Graphic.jsx';

export default function Weather(){
	const geo = useGeo();
	const [weather, setWeather] = useState({currently:null, forecast:null});
  
	useEffect(()=>{
		if(geo){
			getUserLocationWeather();
		}
	},[geo]);

	async function getUserLocationWeather(){
		const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
		const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
		const {lat, lon} = geo;

		try {
			const [{data:currently}, {data:forecast}] = await Promise.all([
				axios.get(`${apiUrl}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`),
				axios.get(`${apiUrl}/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
			]);
			setWeather({currently, forecast});
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<WeatherContainer>
			<Title>Levo um casaquinho?</Title>
			<Search setWeather={setWeather}/>
            <Dashboard currently={weather.currently}/>
            <Graphic forecast={weather.forecast}/>
		</WeatherContainer>
	);
}