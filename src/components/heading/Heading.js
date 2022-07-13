import styled, { css } from 'styled-components';
import { media } from '../../assets/media/media';
import { colors } from '../../assets/styles/colors';

const headingSize = {
   sm: css`
      font-size: 20px;
      ${media.lg} {
         font-size: 18px;
      }
   `,
   md: css`
      font-size: 25px;
      ${media.lg} {
         font-size: 22px;
      }
   `,
   lg: css`
      font-size: 30px;
      ${media.lg} {
         font-size: 26px;
      }
   `,
};

const Heading = styled.h1`
   ${({ size }) => headingSize[size || 'md']};
   font-family: ${({ fontFamily }) => fontFamily || `'Roboto Condensed', sans-serif`};
   color: ${({ color }) => color || colors.heading};
   text-indent: ${({ textIndent }) => textIndent};
   text-align: ${({ align }) => align || 'center'};
`;
export default Heading;
