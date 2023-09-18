import styled from 'styled-components';

export const WeatherContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({bgColor})=>bgColor};
  width: 100%;
  height: 120px;
  border-radius: 20px;
  padding: 20px;
  font-family: 'Nunito', sans-serif;
  color: white;

  @media(max-width: 768px){
    width: 95%;
  }
  
`;

export const LocationAndTemperatureInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const LocationName = styled.h2`
  height: 50%;
  text-align: start;
`;

export const MinAndMaxTemperatureInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50%;
  gap: 5px;
`;


export const CurrentlyTemperatureAndWeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  `;

export const WeatherInfo = styled.h2`
  text-align: end;
`;

export const CurrentTemperature = styled.h2`
  font-size: 40px;
  font-weight: 400;
`;