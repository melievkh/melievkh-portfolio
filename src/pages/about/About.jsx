import React from 'react';
import { FaUserTie } from 'react-icons/fa';
import { AboutContainer, Card, CircleBox, Experiences, Informations, PersonalInfo } from './About.style';
import Button from '../../components/button/Button';
import { StyledTitle } from '../../components/title/Title';
import FlexBox from '../../components/flexbox/FlexBox';
import Heading from '../../components/heading/Heading';
import { colors } from '../../assets/styles/colors';

function About() {
   const hiringMsg = () => {
      alert('So as to hire me, you need to contact with me!');
   };
   return (
      <AboutContainer height="100vh" id="about">
         <StyledTitle>
            <h1>RESUME</h1>
            <h2>
               About <span style={{ color: colors.special }}>Me</span>
            </h2>
         </StyledTitle>
         <Informations width="100%" height="80%" flexDirection="row">
            <PersonalInfo width="50%">
               <Heading size="lg" style={{ color: colors.special, margin: '0' }}>
                  Personal Infos
               </Heading>
               <FlexBox
                  flexDirection="row"
                  width="100%"
                  height="80%"
                  gap="40px"
               >
                  <ul>
                     <li>
                        First Name: <br />
                        <span>Khushnud</span>
                     </li>
                     <li>
                        Age: <br />
                        <span>18</span>
                     </li>
                     <li>
                        Freelance: <br />
                        <span>available</span>
                     </li>
                     <li>
                        Phone: <br />
                        <span>xx xxx-xx-xx</span>
                     </li>
                     <li>
                        LinkedIn: <br />
                        <span>melievkh</span>
                     </li>
                  </ul>
                  <ul>
                     <li>
                        Last Name: <br />
                        <span>Meliev</span>
                     </li>
                     <li>
                        Nationality: <br />
                        <span>uzbek</span>
                     </li>
                     <li>
                        Adress: <br />
                        <span>Samarkand</span>
                     </li>
                     <li>
                        Email: <br />
                        <span>khushnudmeliev21@gmail.com</span>
                     </li>
                     <li>
                        Languages: <br />
                        <span>Uzbek, English, Turkish</span>
                     </li>
                  </ul>
               </FlexBox>
               <a href="#contact">
                  <Button
                     style={{
                        marginRight: '250px',
                        width: '200px',
                        height: '40px',
                     }}
                     onClick={hiringMsg}
                  >
                     Hire Me
                     <FaUserTie />
                  </Button>
               </a>
            </PersonalInfo>
            <Experiences>
               <Card>
                  <CircleBox>2+</CircleBox>
                  <Heading>Years Of Experience</Heading>
               </Card>
               <Card>
                  <CircleBox>10+</CircleBox>
                  <Heading>Completed Projects</Heading>
               </Card>
               <Card>
                  <CircleBox>80+</CircleBox>
                  <Heading>Happy Customers</Heading>
               </Card>
               <Card>
                  <CircleBox>2+</CircleBox>
                  <Heading>Years Of Experience</Heading>
               </Card>
            </Experiences>
         </Informations>
      </AboutContainer>
   );
}

export default About;
