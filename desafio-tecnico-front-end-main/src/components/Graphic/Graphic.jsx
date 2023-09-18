import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import formatDates from '../../helpers/formatDates.js';

export default function Graphic({ forecast }) {
	if (!forecast) {
		return <div>carregando dados</div>;
	}

	return (
		<ResponsiveContainer width="100%" height={300}>
			<LineChart data={formatDates(forecast.list)}>
				<XAxis dataKey="dt_txt" />
				<YAxis />
				<CartesianGrid strokeDasharray="3 3" />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="main.temp" name='Temperatura (°C)' stroke="#FF8017" />
			</LineChart>
		</ResponsiveContainer>
	);
}
