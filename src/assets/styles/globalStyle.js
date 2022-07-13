import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`
body {
   margin: 0;
   padding: 0;
   width: 100%;
   height: 100%;
   background-color: ${colors.bgColor};
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
    #435075,
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
