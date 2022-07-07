import styled from 'styled-components';
import { media } from '../../assets/media/media';
import { colors } from '../../assets/styles/colors';

export const StyledTitle = styled.div`
   width: 100%;
   height: 20%;
   display: flex;
   justify-content: center;
   align-items: center;

   h1 {
      font-size: 100px;
      color: #1c494d;
      font-family: cursive;
      ${media.md}{
         font-size: 80px;
      }
   }
   h2 {
      position: absolute;
      color: ${colors.heading};
      font-size: 50px;
      font-weight: bold;
      font-family: serif;
      ${media.md}{
         font-size: 35px;
      }
   }
`;
