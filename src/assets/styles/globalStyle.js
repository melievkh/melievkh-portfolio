import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`
body {
   margin: 0;
   padding: 0;
   width: 100%;
   height: 100%;
   background: url('https://images.unsplash.com/photo-1464639351491-a172c2aa2911?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
ul li {
   list-style-type: none;
}
hr {
   width: ${({ wd }) => wd || '80%'};
   border: none;
   height: 4px;
   background-image: radial-gradient(
    closest-side,
    #ffa500,
    hsla(0, 0%, 50%, 0) 100%);
  position: relative;
}
svg{
   color: ${colors.heading};
   font-size: 30px;
   &:hover {
         color: ${colors.special};
         margin-top: -15px;
         transition: 0.3s;
      }
}
`;
