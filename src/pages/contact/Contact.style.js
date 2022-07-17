import styled from 'styled-components';
import mobile from '../../assets/media/mobile';
import { colors } from '../../assets/styles/colors';
import FlexBox from '../../components/Flexbox/FlexBox';
import Text from '../../components/Text/Text';

export const Wrapper = styled.div`
   height: 85vh;
   svg {
      font-size: 30px;
   }
   ${mobile} {
      height: auto;
   }
`;
export const ContactContainer = styled.div`
   display: flex;
   flex-direction: row;
   ${mobile} {
      height: fit-content;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
`;
export const AdressBox = styled(FlexBox)`
   width: 40%;
   height: 90%;
   gap: 20px;
   ${mobile} {
      width: auto;
   }
`;

export const MailText = styled.div`
   width: 70%;
   height: auto;
   display: flex;
   justify-content: center;
   align-items: start;
   flex-direction: column;
`;

export const Icons = styled(FlexBox)`
   ul {
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      gap: 30px;
   }
`;

export const Form = styled.form`
   width: 60%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 20px;

   textarea {
      width: 670px;
      height: 240px;
      font-size: 18px;
      border-radius: 4px;
      border: 1px solid ${colors.special};
      outline: none;
      text-indent: 10px;
      background: ${colors.input};
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      color: ${colors.heading};
      resize: none;
      transition: 0.1s;
      &:focus {
         border: 1px solid ${colors.heading};
      }
      &::-webkit-input-placeholder {
         color: ${colors.text};
      }
      ${mobile} {
         width: 350px;
         height: 100px;
      }
   }
`;
export const Name = styled(FlexBox)`
   width: 100%;
   height: 20%;
   flex-direction: row;
   justify-content: space-evenly;
   ${mobile} {
      gap: 4px;
   }
`;

export const Lorem = styled(Text)`
   width: 450px;
   ${mobile} {
      width: auto;
   }
`;
