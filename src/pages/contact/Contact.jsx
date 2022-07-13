import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaTelegram } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
import { icons } from '../../mock/icons';
import {
   AdressBox,
   Wrapper,
   Form,
   Icons,
   MailText,
   Name,
   ContactContainer,
} from './Contact.style';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import FlexBox from '../../components/Flexbox/FlexBox';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';
import Title from '../../components/Title/Title';

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
      <Wrapper id="contact">
         <Title>Contact Me</Title>
         <ContactContainer>
            <AdressBox>
               <Heading>CONTACT INFO</Heading>
               <Text align="start" style={{width: '450px'}}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolore porro repudiandae veniam nesciunt odio eius animi
                  saepe...
               </Text>
               <FlexBox gap="10px">
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
            </AdressBox>
            <Form onSubmit={validateForm}>
               <Name>
                  <Input
                     name="name"
                     type="text"
                     placeholder="First Name"
                     onChange={(e) =>
                        setDetails({ ...details, name: e.target.value })
                     }
                     value={details.name}
                     autoComplete="off"
                  />
                  <Input
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
               <Input
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
         </ContactContainer>
      </Wrapper>
   );
}

export default Contact;
