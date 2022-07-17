import styled, { css } from 'styled-components';
import mobile from '../../assets/media/mobile';
import { colors } from '../../assets/styles/colors';

const headingSize = {
   sm: css`
      font-size: 20px;
      ${mobile} {
         font-size: 18px;
      }
   `,
   md: css`
      font-size: 24px;
      ${mobile} {
         font-size: 20px;
      }
   `,
   lg: css`
      font-size: 55px;
      ${mobile} {
         font-size: 35px;
      }
   `,
};

const Heading = styled.h1`
   ${({ size }) => headingSize[size || 'md']};
   font-family: ${({ fontFamily }) => fontFamily || `'Roboto Condensed', sans-serif`};
   color: ${({ color }) => color || colors.heading};
   text-indent: ${({ textIndent }) => textIndent};
   text-align: ${({ align }) => align || 'center'};
   font-weight: bold;
`;
export default Heading;
