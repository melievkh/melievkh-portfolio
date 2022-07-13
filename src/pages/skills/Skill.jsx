import React from 'react';
import { FaHtml5, FaCss3, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { Icons, Languages, SkillContainer, SkillsBox } from './Skills.style';
import Title from '../../components/Title/Title';
import Heading from '../../components/Heading/Heading';

function Skill() {
   return (
      <SkillContainer id="skills">
         <Title>My Skills</Title>
         <SkillsBox>
            <Heading>Languages and Tools those I use are</Heading>
            <Languages>Javascript</Languages>
            <Languages>HTML5</Languages>
            <Languages>CSS3</Languages>
            <Languages>ReactJS</Languages>
            <Languages>Redux</Languages>
            <Languages>Material UI</Languages>
            <Languages>Styled-Components</Languages>
            <Languages>Npm</Languages>
            <Languages>Git</Languages>
            <Languages>Github</Languages>
            <Languages>Api</Languages>
            <Languages>Router</Languages>
         </SkillsBox>
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
