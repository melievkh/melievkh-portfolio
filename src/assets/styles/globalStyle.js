import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`
body {
   margin: 0;
   padding: 0;
   width: 100%;
   height: 100%;
   background: url('https://cdn.wallpapersafari.com/72/18/C1iAjt.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
ul li {
   list-style-type: none;
}
hr {
   width: 80%;
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
