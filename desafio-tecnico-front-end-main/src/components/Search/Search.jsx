import axios from 'axios';
import { useForm } from 'react-hook-form';
import { CityInput, FormContainer, SubmitButton } from './styles.js';

export default function Search({setWeather}){
	const {register, handleSubmit} = useForm();

	async function submitCity(data){
		try {
			const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
			const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
			const [{data:currently}, {data:forecast}] = await Promise.all([
				axios.get(`${apiUrl}/weather?q=${data.city}&units=metric&appid=${apiKey}`),
				axios.get(`${apiUrl}/forecast?q=${data.city}&units=metric&appid=${apiKey}`)
			]);

			setWeather({currently, forecast});
		} catch (error) {
			if(error.response.status === 404){
				alert('Cidade não encontrada!');
			}
			console.log(error);
		}
	}

	return(
		<FormContainer onSubmit={handleSubmit(submitCity)}>
			<CityInput 
				type="text" 
				name="city" 
				id="city" 
				placeholder='Qual cidade deseja buscar?'
				{...register('city',{required:'É necessário digitar o nome da cidade!'})}/>
			<SubmitButton type='submit'>Buscar</SubmitButton>
		</FormContainer>
	);
}