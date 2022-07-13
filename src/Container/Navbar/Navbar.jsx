import React, { useRef } from 'react';
import { navMenu } from './navMenu';
import { Wrapper } from './Navbar.style';
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
            <Heading size="md">
               meliev<span style={{ color: colors.special }}>kh</span>
            </Heading>
         </FlexBox>
         <FlexBox width="70%" alignItems="end" style={{ marginRight: '20px' }}>
            <ul>
               {navMenu.map((nav) => (
                  <li key={nav.id}>
                     <a href={nav.link}>{nav.name}</a>
                  </li>
               ))}
            </ul>
         </FlexBox>
      </Wrapper>
   );
}

export default Navbar;