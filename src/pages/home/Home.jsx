import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { icons } from '../../mock/icons';
import { HomeContainer, IconList, TextBox } from './Home.style';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import { colors } from '../../assets/styles/colors';
import Text from '../../components/Text/Text';

function Home() {
   return (
      <HomeContainer id="home">
         <TextBox>
            <Heading size="lg">
               Hello, I am
               <span style={{ color: colors.special }}> Khushnud Meliev</span>
            </Heading>
            <Heading style={{ fontSize: '38px', margin: 0 }}>
               <ReactTypingEffect
                  text={['Front-End Developer', 'Web Developer & Designer']}
                  eraseSpeed={80}
                  eraseDelay={20}
                  typingDelay={20}
               />
            </Heading>
            <Text size='lg' style={{ width: '600px' }}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
               quasi qui distinctio vel accusantium voluptatem expedita
               accusamus dicta iste possimus culpa nesciunt dolorem excepturi!
               Aliquam maxime et nihil numquam aspernatur.
            </Text>
            <IconList>
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
            </IconList>
            <Text>Get to know me better</Text>
            <a href="#about">
               <Button>About me</Button>
            </a>
         </TextBox>
      </HomeContainer>
   );
}

export default Home;
