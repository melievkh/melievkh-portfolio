import styled from 'styled-components';

const FlexBox = styled.div`
   display: flex;
   flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
   justify-content: ${({ justifyContent }) => justifyContent || 'center'};
   align-items: ${({ alignItems }) => alignItems || 'center'};
   gap: ${({ gap }) => gap};
   flex-wrap: ${({ flexWrap }) => flexWrap};
   width: ${({ width }) => width || '100%'};
   height: ${({ height }) => height || '100%'};
`;

export default FlexBox;
