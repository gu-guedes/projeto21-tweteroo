import { styled } from 'styled-components';

export const WeatherContainer = styled.div`
  display: flex;
  justify-content:space-evenly;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-family: 'Nunito', sans-serif;
  width: 40vw;

  @media(max-width: 768px){
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: #3841AD;
  font-size: 60px;
  
  @media(max-width: 768px){
    font-size: 35px;
  }
`;