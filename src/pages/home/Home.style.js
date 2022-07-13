import styled from 'styled-components';
import { media } from '../../assets/media/media';
import FlexBox from '../../components/Flexbox/FlexBox';

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
