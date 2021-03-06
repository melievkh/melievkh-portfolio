import styled from 'styled-components';
import mobile from '../../assets/media/mobile';
import { colors } from '../../assets/styles/colors';
import FlexBox from '../../components/Flexbox/FlexBox';

export const AboutContainer = styled(FlexBox)`
   ul {
      width: auto;
      display: flex;
      flex-direction: column;
      gap: 8px;
   }
   li {
      font-size: 18px;
      color: ${colors.heading};
      margin: 5px;
   }
   span {
      color: ${colors.text};
   }
   ${mobile} {
      height: auto;
      width: auto;
   }
`;

export const Informations = styled(FlexBox)`
   ${mobile} {
      flex-direction: column;
      gap: 10px;
   }
`;

export const ProgrammingSkills = styled(FlexBox)`
   width: 50%;
   align-items: flex-start;
   padding: 10px 20px;
   li {
      margin: 0;
      ${mobile} {
         width: auto;
      }
   }
   ${mobile} {
      width: auto;
      height: auto;
      justify-content: center;
      align-items: center;
   }
`;

export const Experiences = styled.div`
   width: 50%;
   height: 100%;
   display: grid;
   grid-template-columns: auto auto;
   place-items: center;
   ${mobile} {
      width: 100%;
   }
`;

export const Card = styled(FlexBox)`
   width: 240px;
   height: 240px;
   ${mobile} {
      width: 210px;
      height: 210px;
   }
`;
export const CircleBox = styled.div`
   width: 150px;
   height: 150px;
   border-radius: 100%;
   color: ${colors.heading};
   font-size: 70px;
   display: flex;
   justify-content: center;
   align-items: center;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
   border: 2px solid ${colors.special};
`;
