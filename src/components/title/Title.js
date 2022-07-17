import styled from 'styled-components';
import mobile from '../../assets/media/mobile';
import { colors } from '../../assets/styles/colors';
import Heading from '../Heading/Heading';

const Title = styled(Heading)`
   font-size: 60px;
   color: ${colors.special};
   ${mobile}{
      font-size: 40px;
   }
`;
export default Title;
