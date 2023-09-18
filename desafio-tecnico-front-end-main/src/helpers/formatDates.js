import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
dayjs.locale('pt-br');
export default function formatDates(forecasts){
	return forecasts.map(forecast => (
		{...forecast, dt_txt: dayjs(forecast.dt_txt).format('DD/MM(ddd) ')}
	));
}
