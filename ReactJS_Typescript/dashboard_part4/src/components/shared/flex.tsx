import styled from 'styled-components';

interface FlexPropsInterface {
   width?: string,
   height?: string,
   margin?: string,
   padding?: string,
   justifyContent?: string,
   alignItems?: string,
   background?: string,
   gap?: string,
   flexDirection?: string;
   flexWrap?: string;
}

export const Flex = styled.div<FlexPropsInterface>`
   display: flex;

   width: ${(props) => props.width || "auto"};
   height: ${(props) => props.height || "auto"};
   margin: ${(props) => props.margin || "0"};
   padding: ${(props) => props.padding || "0"};
   justify-content: ${(props) => props.justifyContent || "start"};
   align-items: ${(props) => props.alignItems || "start"};
   background: ${(props) => props.background || "none"};
   gap: ${(props) => props.gap || "0px"};
   flex-direction: ${(props) => props.flexDirection || "row"};
   flex-wrap:  ${(props) => props.flexWrap || "no-wrap"};
`

export const FlexRow = styled(Flex)`
   flex-direction: row;
`

export const FlexColumn = styled(Flex)`
   flex-direction: column;
`  