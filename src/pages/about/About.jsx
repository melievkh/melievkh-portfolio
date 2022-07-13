import React from 'react';
import {
   AboutContainer,
   Card,
   CircleBox,
   Experiences,
   Informations,
   ProgrammingSkills,
} from './About.style';
import Title from '../../components/Title/Title';
import Heading from '../../components/Heading/Heading';

function About() {
   return (
      <AboutContainer height="100vh" id="about">
         <Title>About Me</Title>
         <Informations width="100%" height="80%" flexDirection="row">
            <ProgrammingSkills>
               <Heading>Programming Skills</Heading>
               <ul>
                  <li>
                     <b>Bootstrap, Material UI, Styled Components</b>
                  </li>
                  <li>
                     Experience in using
                     <b>
                        ReactJS Components, Hooks, Forms, Events, Keys, Router
                     </b>
                     and e.g.
                  </li>
                  <li>
                     Node Package Manager <b>(NPM), Yarn</b>
                  </li>
                  <li>
                     Version Control System - <b>Git, GitHub</b>
                  </li>
                  <li>
                     Experience in <b>Front-End Development</b>
                  </li>
               </ul>
               <Heading align="center" tyle={{ margin: 0 }}>
                  Experience
               </Heading>
               <ul>
                  <li>
                     2 years of experience as a <b>UI/UX Designer</b>
                  </li>
                  <li>
                     2 years of experience as a <b>Front-End Developer</b>
                  </li>
                  <li>
                     1 year of experience as a <b>React JS Developer</b>
                  </li>
                  <li>
                     2 years of experience as a <b>Javascript Developer</b>
                  </li>
               </ul>
            </ProgrammingSkills>
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
