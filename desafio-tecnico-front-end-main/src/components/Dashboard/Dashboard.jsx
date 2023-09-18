import legendsAndColors from '../../utils/weatherLegendsAndColors.js';
import { CurrentTemperature, CurrentlyTemperatureAndWeatherInfo, LocationAndTemperatureInfo, LocationName, MinAndMaxTemperatureInfo, WeatherContainer, WeatherInfo } from './styles.js';

export default function Dashboard({currently}){

	if(!currently){
		return <div>Sem dados para mostrar!</div>;
	}

	return (
		<WeatherContainer bgColor={legendsAndColors[currently.weather[0].main].color}>
			<LocationAndTemperatureInfo>
				<LocationName>Agora: {currently.name}</LocationName>
				<MinAndMaxTemperatureInfo>
					<p>Mínima: {currently.main.temp_min.toFixed(1)}°C</p>
					<p>Máxima: {currently.main.temp_max.toFixed(1)}°C</p>
				</MinAndMaxTemperatureInfo>
			</LocationAndTemperatureInfo>
			<CurrentlyTemperatureAndWeatherInfo>
				<WeatherInfo>{legendsAndColors[currently.weather[0].main].legend}</WeatherInfo>
				<CurrentTemperature>{currently.main.temp.toFixed(1)}°C</CurrentTemperature>
			</CurrentlyTemperatureAndWeatherInfo>
		</WeatherContainer>
	);
}