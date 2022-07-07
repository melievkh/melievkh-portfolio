import styled from 'styled-components';
import { media } from '../../assets/media/media';
import FlexBox from '../../components/flexbox/FlexBox';

export const HomeContainer = styled(FlexBox)`
   ${media.lg} {
      height: auto;
   }
`;

export const TextCont = styled(FlexBox)`
   ${media.lg} {
      width: 100%;
   }
`;

export const ImgContainer = styled(FlexBox)`
   ${media.lg} {
      display: none;
   }
   /* img {
      width: 380px;
      height: 450px;
      border-bottom-left-radius: 150px;
      border-bottom-right-radius: 80px;
      border-top-right-radius: 150px;
   } */
`;

export const TextBox = styled(FlexBox)`
   ${media.lg} {
      align-items: center;
      justify-content: center;
   }
`;
export const IconList = styled.ul`
   width: 100%;
   padding: 0;
   margin-top: 40px;
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
