import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaTelegram } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { icons } from '../../mock/icons';
import {
   AdressBox,
   ContactContainer,
   Form,
   Icons,
   MailText,
   MsgInput,
   Name,
} from './Contact.style';
import Button from '../../components/button/Button';
import { StyledInput } from '../../components/input/input.style';
import { StyledTitle } from '../../components/title/Title';
import FlexBox from '../../components/flexbox/FlexBox';
import Heading from '../../components/heading/Heading';
import Text from '../../components/text/Text';
import { colors } from '../../assets/styles/colors';

function Contact() {
   const initialValues = { name: '', surname: '', email: '', comment: '' };
   const [details, setDetails] = useState(initialValues);
   const validateForm = (e) => {
      e.preventDefault();
      if (!details.name.length) alert("Name shouldn't be blank!");
      else if (!details.surname.length) alert("Surname shouldn't be blank!");
      else if (!details.email.length) alert("Email shouldn't be blank!");
      else if (details.message === '' && details.message.length < 5)
         alert('Your message should contain 5 words at least!');
      else {
         alert('your message sent succesfully!');
      }
      emailjs
         .sendForm(
            'service_cb3nm5h',
            'template_81z87tv',
            e.target,
            'CWYJEeNuWHX1HpR2r'
         )
         .then((res) => console.log(res))
         .catch((err) => console.log(err));
   };

   return (
      <ContactContainer height="85vh" id="contact">
         <StyledTitle>
            <h1>CONTACT</h1>
            <h2>
               Get in <span style={{ color: colors.special }}>Touch</span>
            </h2>
         </StyledTitle>
         <FlexBox flexDirection="row" height="80%">
            <AdressBox>
               <FlexBox width="70%" height="100%">
                  <Heading>CONTACT INFO</Heading>
                  <Text align="start">
                     Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Dolore porro repudiandae veniam nesciunt odio eius animi
                     saepe...
                  </Text>
                  <FlexBox>
                     <FlexBox height="30%" flexDirection="row" gap="10px">
                        <GoLocation />
                        <MailText>
                           <Heading size="sm" style={{ margin: 0 }}>
                              ADDRESS POINT
                           </Heading>
                           <Text>Uzbekistan, Samarkand</Text>
                        </MailText>
                     </FlexBox>
                     <FlexBox height="30%" flexDirection="row" gap="10px">
                        <FiMail />
                        <MailText>
                           <Heading size="sm" style={{ margin: 0 }}>
                              MAIL ME
                           </Heading>
                           <Text>khushnudmeliev21@gmail.com</Text>
                        </MailText>
                     </FlexBox>
                     <FlexBox height="30%" flexDirection="row" gap="10px">
                        <FiPhoneCall />
                        <MailText>
                           <Heading size="sm" style={{ margin: 0 }}>
                              CALL ME
                           </Heading>
                           <Text>xx xxx xx xx</Text>
                        </MailText>
                     </FlexBox>
                  </FlexBox>
                  <Icons>
                     <ul>
                        {icons.map((icon) => (
                           <li key={icon.id}>
                              <a
                                 href={icon.link}
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 {icon.iconName}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </Icons>
               </FlexBox>
            </AdressBox>
            <MsgInput>
               <Form onSubmit={validateForm}>
                  <Name>
                     <StyledInput
                        name="name"
                        type="text"
                        placeholder="First Name"
                        onChange={(e) =>
                           setDetails({ ...details, name: e.target.value })
                        }
                        value={details.name}
                        autoComplete="off"
                     />
                     <StyledInput
                        name="surname"
                        type="text"
                        placeholder="Surname"
                        onChange={(e) =>
                           setDetails({ ...details, surname: e.target.value })
                        }
                        value={details.surname}
                        autoComplete="off"
                     />
                  </Name>
                  <StyledInput
                     wd="675px"
                     name="email"
                     type="email"
                     placeholder="...name@gmail.com"
                     onChange={(e) =>
                        setDetails({ ...details, email: e.target.value })
                     }
                     value={details.email}
                     autoComplete="off"
                  />
                  <textarea
                     name="message"
                     placeholder="Your Message"
                     cols="30"
                     rows="10"
                     onChange={(e) =>
                        setDetails({ ...details, message: e.target.value })
                     }
                     value={details.message}
                     autoComplete="off"
                  ></textarea>
                  <Button wd="160px" hg="40px" style={{ marginLeft: '500px' }}>
                     <FlexBox flexDirection="row" justifyContent="space-evenly">
                        Send Message <FaTelegram style={{ fontSize: '22px' }} />
                     </FlexBox>
                  </Button>
               </Form>
            </MsgInput>
         </FlexBox>
      </ContactContainer>
   );
}

export default Contact;
