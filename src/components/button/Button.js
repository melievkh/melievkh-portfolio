import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';

const Button = styled.button`
   width: ${({ wd }) => wd || '120px'};
   height: ${({ hg }) => hg || '35px'};
   background-color: ${({ bgColor }) => bgColor || '#435075'};
   border-radius: ${({ borderRadius }) => borderRadius || '8px'};
   font-size: ${({ fontSize }) => fontSize || '18px'};
   font-family: serif;
   color: ${colors.text};
   border: none;
   cursor: pointer;
   outline: none;
   &:hover{
      background-color: inherit;
      border: 1px solid ${colors.special};
   }
`;

export default Button;
