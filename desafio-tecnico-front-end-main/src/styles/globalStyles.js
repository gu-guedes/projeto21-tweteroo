import { createGlobalStyle, styled } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    a{
      text-decoration: none;
    }
  }
`;

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default GlobalStyles;