import { styled } from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  gap:10px;
  width: 100%;
  height: 50px;
  font-family: 'Nunito', sans-serif;

  @media(max-width: 768px){
  }
`;

export const CityInput = styled.input`
  border-radius: 10px;
  border: 1px solid #3841AD;
  padding: 5px;
  transition: all 0.4s;
  width: 70%;
  font-size: 20px;
  &:focus {
    border-width: 1px; 
    outline-color: #3841AD;
  }
`;

export const SubmitButton = styled.button`
  border: none;
  background-color: #3841AD;
  border-radius: 10px;
  height: 100%;
  width: 60px;
  font-weight: 600;
  color: white;
  transition: all 0.4s;
  cursor: pointer;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); 
  height: 100%;
  &:hover {
    color: #3841AD;
    background-color: white;
  }
`;