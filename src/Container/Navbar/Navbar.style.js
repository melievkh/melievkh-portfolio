import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const Wrapper = styled.div`
   width: 100%;
   height: 55px;
   background-color: inherit;
   box-shadow: rgba(0, 0, 0, 0.3) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
   display: flex;
   flex-direction: row;
   transition: 0.2s;
   position: fixed;
   a {
      color: ${colors.special};
      text-decoration: none;
      &:hover {
      }
   }
`;

export const NavMenu = styled.div`
   width: 70%;
   display: flex;
   justify-content: flex-end;
   ul {
      display: flex;
      align-items: center;
      gap: 25px;
      margin-right: 10px;
   }
   li {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style-type: none;
      width: 80px;
      height: 30px;
      &:hover {
         background-color: ${colors.special};
         transition: 0.3s;
         border-radius: 4px;
         color: white;
      }
   }
`;
