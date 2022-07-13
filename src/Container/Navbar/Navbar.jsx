import React, { useRef } from 'react';
import { NavMenu, Wrapper } from './Navbar.style';
import { colors } from '../../assets/styles/colors';
import Heading from '../../components/Heading/Heading';
import FlexBox from '../../components/Flexbox/FlexBox';

function Navbar() {
   const navbar = useRef(null);

   let prevScrollpos = window.pageYOffset;

   window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
         navbar.current.style.top = '0';
      } else {
         navbar.current.style.top = '-60px';
      }
      prevScrollpos = currentScrollPos;
   };

   return (
      <Wrapper ref={navbar}>
         <FlexBox width="30%">
            <Heading style={{fontFamily: 'cursive'}}>
               meliev<span style={{ color: colors.special }}>kh</span>
            </Heading>
         </FlexBox>
         <NavMenu>
               <ul>
                  <a href="#about">
                     <li>About</li>
                  </a>
                  <a href="#skills">
                     <li>Skills</li>
                  </a>
                  <a href="#contact">
                     <li>Contact</li>
                  </a>
               </ul>
         </NavMenu>
      </Wrapper>
   );
}

export default Navbar;
