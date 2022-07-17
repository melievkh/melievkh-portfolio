import styled, { css } from 'styled-components';
import mobile from '../../assets/media/mobile';
import { colors } from '../../assets/styles/colors';

const headingSize = {
   sm: css`
      font-size: 14px;
   `,
   md: css`
      font-size: 16px;
   `,
   lg: css`
      font-size: 18px;
   `,
};

const Text = styled.p`
   ${({ size }) => headingSize[size || 'sm']};
   font-family: ${({ fontFamily }) => fontFamily || `'Roboto Condensed', sans-serif`};
   color: ${({ color }) => color || `${colors.text}`};
   text-indent: ${({ textIndent }) => textIndent};
   text-align: ${({ align }) => align || 'center'};
   margin: 0;
   ${mobile} {
      width: auto;
   }
`;

export default Text;
