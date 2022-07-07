import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { icons } from '../../mock/icons';
// import image from '../../assets/img/image.png';
import { HomeContainer, IconList, ImgContainer, TextBox, TextCont } from './Home.style';
import Heading from '../../components/heading/Heading';
import Text from '../../components/text/Text';

function Home() {
   return (
      <HomeContainer id="home" height="650px" flexDirection="row">
         <TextCont width="50%" height="100%">
            <TextBox width="80%" height="80%" alignItems="flex-start">
               <Heading size="lg" style={{ color: '#FFA500', margin: '5px' }}>
                  Welcome!
                  <div
                     style={{
                        width: '200px',
                        height: '5px',
                        borderBottom: '1px solid white',
                     }}
                  ></div>
               </Heading>
               <Heading style={{ margin: '5px' }}>I am Khushnud Meliev</Heading>
               <Heading size="lg" style={{ margin: '5px' }}>
                  <ReactTypingEffect
                     text={['Front-End Developer', 'Web Developer & Designer']}
                     eraseSpeed={80}
                     eraseDelay={20}
                     typingDelay={20}
                  />
               </Heading>
               <Text align="start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  eos deserunt voluptatum dicta vitae quae doloribus quos
                  voluptates dolorem veritatis reprehenderit ab, iure ipsum
                  labore...
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
            </TextBox>
         </TextCont>
         <ImgContainer width="50%" height="100%">
            {/* <img src={image} alt="" /> */}
         </ImgContainer>
      </HomeContainer>
   );
}

export default Home;
