import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const Wrapper = styled.div`
   width: 100%;
   height: 55px;
   background-color: inherit;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   background-color: inherit;
   display: flex;
   flex-direction: row;
   transition: 0.2s;
   position: fixed;
   z-index: 1;
   ul {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      gap: 80px;
   }
   li {
      &:hover {
         transition: 0.2s;
         border-bottom: 1.5px solid ${colors.special};
         border-radius: 4px;
      }
   }
   a {
      color: ${colors.white};
      text-decoration: none;
      &:hover {
         color: ${colors.special};
      }
   }
`;
