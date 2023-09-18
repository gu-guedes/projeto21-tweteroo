import { useEffect, useState } from 'react';

export default function useGeo(){
	const [geo, setGeo] = useState(null);

	useEffect(()=>{
		if ('geolocation' in navigator) {
  
			navigator.geolocation.getCurrentPosition(position => {
    
				const lat = position.coords.latitude;
				const lon = position.coords.longitude;
    
				setGeo({lat,lon});
			}, e => {
				switch(e.code) {
				case e.PERMISSION_DENIED:
					console.error('Permissão de geolocalização negada pelo usuário.');
					break;
				case e.POSITION_UNAVAILABLE:
					console.error('Informações de geolocalização não estão disponíveis.');
					break;
				case e.TIMEOUT:
					console.error('Tempo limite esgotado ao tentar obter a localização do usuário.');
					break;
				default:
					console.error('Ocorreu um erro desconhecido.');
					break;
				}
			});
		} else {
			console.error('Seu navegador não suporta geolocalização.');
		}
	},[]);

	return geo;
}