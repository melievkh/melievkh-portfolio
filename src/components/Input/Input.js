import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';

const Input = styled.input`
   width: ${({ wd }) => wd || '300px'};
   height: 2rem;
   border-radius: 4px;
   text-indent: 20px;
   outline: none;
   background: ${colors.input};
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   border: 1px solid grey;
   color: ${colors.heading};
   transition: 0.1s;
   font-family: sans-serif;
   &:focus {
      border: 1px solid ${colors.special};
   }
   &::-webkit-input-placeholder {
      color: ${colors.text};
   }
`;
export default Input;
