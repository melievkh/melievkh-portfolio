import styled from 'styled-components';
import { media } from '../../assets/media/media';
import { colors } from '../../assets/styles/colors';
import FlexBox from '../../components/flexbox/FlexBox';

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
   ${media.lg} {
      height: auto;
      width: auto;
   }
`;

export const Informations = styled(FlexBox)`
   ${media.lg} {
      flex-direction: column;
      gap: 10px;
   }
`;

export const PersonalInfo = styled(FlexBox)`
   ${media.lg} {
      width: 100%;
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
   ${media.md} {
      width: 100%;
   }
`;

export const Card = styled(FlexBox)`
   width: 240px;
   height: 240px;
   ${media.sm} {
      width: 210px;
      height: 210px;
   }
`
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

`;

