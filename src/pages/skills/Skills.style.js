import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';
import FlexBox from '../../components/flexbox/FlexBox';

export const SkillContainer = styled(FlexBox)`
   width: 100%;
   height: 100vh;
   ul {
      display: flex;
      flex-direction: column;
      gap: 8px;
   }
`;
export const Skills = styled(FlexBox)``;

export const Bar = styled.span`
   width: 500px;
   background: ${colors.grey};
   display: block;
   height: 3px;
   overflow: hidden;
   box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
   border: 1px solid ${colors.special};
   border-radius: 5px;
`;

export const Html = styled.span`
   width: 80%;
   height: 3px;
   background: ${colors.special};
   float: left;
`;
export const Css = styled.span`
   width: 60%;
   height: 10px;
   background: ${colors.special};
   float: left;
`;
export const Javascript = styled.span`
   width: 75%;
   height: 10px;
   background: ${colors.special};
   float: left;
`;
export const REact = styled.span`
   width: 65%;
   height: 10px;
   background: ${colors.special};
   float: left;
`;
export const Bootstrap = styled.span`
   width: 65%;
   height: 10px;
   background: ${colors.special};
   float: left;
`;

export const Icons = styled(FlexBox)`
   width: 100%;
   height: 15%;
   ul {
      display: flex;
      gap: 50px;
      flex-direction: row;
   }
`;

export const Experience = styled(FlexBox)`
   li {
      color: ${colors.text};
   }
`;
