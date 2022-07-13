import styled from 'styled-components';
import FlexBox from '../../components/Flexbox/FlexBox';
import Button from '../../components/Button/Button'

export const SkillContainer = styled(FlexBox)`
   width: 100%;
   height: fit-content;
   gap: 20px;
   ul {
      display: flex;
      flex-direction: column;
      gap: 8px;
   }
`;

export const SkillsBox = styled.div`
   width: 460px;
   height: fit-content;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-wrap: wrap;
   gap: 12px;
`

export const Languages = styled(Button)`
   width: fit-content;
`

export const Icons = styled(FlexBox)`
   width: 100%;
   height: 15%;
   ul {
      display: flex;
      gap: 50px;
      flex-direction: row;
   }
`;

