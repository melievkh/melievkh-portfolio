import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const StyledInput = styled.input`
   width: ${({ wd }) => wd || '300px'};
   height: 2rem;
   border: none;
   border-radius: 4px;
   text-indent: 20px;
   outline: none;
   background: ${colors.input};
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   color: ${colors.heading};
   transition: 0.1s;
   font-family: sans-serif;
   &:focus {
      border: 2px solid ${colors.special};
   }
   &::-webkit-input-placeholder {
      color: ${colors.heading};
   }
`;
