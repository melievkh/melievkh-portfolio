import styled from 'styled-components';

const Button = styled.button`
   width: ${({ wd }) => wd || '120px'};
   height: ${({ hg }) => hg || '35px'};
   background-color: ${({ bgColor }) => bgColor || '#ffa000'};
   border-radius: ${({ borderRadius }) => borderRadius || '8px'};
   font-size: ${({ fontSize }) => fontSize || '18px'};
   font-family: serif;
   color: white;
   border: none;
   cursor: pointer;
   outline: none;
`;

export default Button;
