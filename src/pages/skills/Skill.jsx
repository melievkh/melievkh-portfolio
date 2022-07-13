import React from 'react';
import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import {
   Bar,
   Bootstrap,
   Css,
   Experience,
   Html,
   Icons,
   Javascript,
   REact,
   SkillContainer,
   Skills,
} from './Skills.style';
import FlexBox from '../../components/Flexbox/FlexBox';
import Heading from '../../components/Heading/Heading';
import Title from '../../components/Title/Title';

function Skill() {
   return (
      <SkillContainer id="skills">
         <Title>My Skills</Title>
         <Skills width="100%" flexDirection="row">
            <FlexBox alignItems="start" width="50%">
               <ul style={{ width: 'auto' }}>
                  <li>
                     <Heading
                        size="sm"
                        align="start"
                        style={{ margin: '10px' }}
                     >
                        HTML5
                     </Heading>
                     <Bar>
                        <Html></Html>
                     </Bar>
                  </li>
                  <li>
                     <Heading align="start" style={{ margin: '10px' }}>
                        CSS3
                     </Heading>
                     <Bar>
                        <Css></Css>
                     </Bar>
                  </li>
                  <li>
                     <Heading align="start" style={{ margin: '10px' }}>
                        JAVASCRIPT
                     </Heading>
                     <Bar>
                        <Javascript></Javascript>
                     </Bar>
                  </li>
                  <li>
                     <Heading align="start" style={{ margin: '10px' }}>
                        ReactJS
                     </Heading>
                     <Bar>
                        <REact></REact>
                     </Bar>
                  </li>
                  <li>
                     <Heading align="start" style={{ margin: '10px' }}>
                        Bootstrap
                     </Heading>
                     <Bar>
                        <Bootstrap></Bootstrap>
                     </Bar>
                  </li>
               </ul>
            </FlexBox>
            <Experience width="50%" alignItems="flex-start">
               <Heading style={{ margin: 0 }}>Programming Skills</Heading>
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
            </Experience>
         </Skills>
         <Icons>
            <ul>
               <li>
                  <FaHtml5 />
               </li>
               <li>
                  <FaCss3 />
               </li>
               <li>
                  <SiJavascript />
               </li>
               <li>
                  <FaReact />
               </li>
            </ul>
         </Icons>
      </SkillContainer>
   );
}

export default Skill;
