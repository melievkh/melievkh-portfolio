import styled from 'styled-components';
import { media } from '../../assets/media/media';
import FlexBox from '../../components/Flexbox/FlexBox';

export const HomeContainer = styled(FlexBox)`
   height: 90vh;
   flex-direction: row;
   ${media.lg} {
      height: auto;
   }
`;


export const TextBox = styled(FlexBox)`
   width: 800px;
   height: 80%;
   align-items: center;
   gap: 8px;
   ${media.lg} {
      align-items: center;
      justify-content: center;
   }
`;
export const IconList = styled.ul`
   width: 100%;
   padding: 0;
   margin-top: 60px;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   gap: 30px;
   li {
      font-size: 30px;
      &:hover {
         margin-top: -15px;
         transition: 0.3s;
      }
   }
`;
