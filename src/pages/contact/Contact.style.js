import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';
import FlexBox from '../../components/flexbox/FlexBox';

export const ContactContainer = styled(FlexBox)`
   svg {
      font-size: 30px;
   }
`;
export const AdressBox = styled(FlexBox)`
   width: 40%;
   height: 90%;
   svg {
      color: ${colors.text};
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

export const MsgInput = styled.div`
   width: 60%;
   height: 90%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

export const Form = styled.form`
   width: 100%;
   height: 90%;
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
      border: none;
      outline: none;
      text-indent: 10px;
      background: ${colors.input};
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      color: ${colors.heading};
      resize: none;
      transition: 0.1s;
      &:focus {
         border: 2px solid ${colors.special};
      }
      &::-webkit-input-placeholder {
         color: ${colors.heading};
      }
   }
`;
export const Name = styled(FlexBox)`
   width: 100%;
   height: 20%;
   flex-direction: row;
   justify-content: space-evenly;
`;
