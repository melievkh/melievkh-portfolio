import styled from 'styled-components';
import mobile from '../../assets/media/mobile';
import FlexBox from '../../components/Flexbox/FlexBox';
import Text from '../../components/Text/Text'

export const HomeContainer = styled(FlexBox)`
   height: 90vh;
   flex-direction: row;
   ${mobile} {
      height: 680px;
   }
`;


export const TextBox = styled(FlexBox)`
   width: 800px;
   height: 80%;
   align-items: center;
   gap: 8px;
   ${mobile} {
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

export const Lorem = styled(Text)`
   width: 600px;
   font-size: 24px;
   ${mobile}{
      width: auto;
      font-size: 22px;
   }
`