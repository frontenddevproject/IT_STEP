import styled from 'styled-components';


export interface ModalPropsInterface {
   width?: string;
   height?: string;
   margin?: string;
   padding?: string;
   border?: string;
   borderRadius?: string;
   background?: string;
   boxShadow?: string;
   boxSizing?: string;
   color?: string;
   fontSize?: string
   fontWeight?: string;
}

export const Modal = styled.div<ModalPropsInterface>`
   width: ${(props) => props.width || "400px"};
   height: ${(props) => props.height || "250px"};
   margin: ${(props) => props.margin || "15px"};
   padding: ${(props) => props.padding || "30px 15px"};
   border: ${(props) => props.border || "2px solid gray"};
   border-radius: ${(props) => props.borderRadius || "10px"};
   background: ${(props) => props.background || "inherit"};
   color: ${(props) => props.color || "black"};
   font-size: ${(props) => props.fontSize || "16px"};
   font-weight: ${(props) => props.fontWeight || "400"};
   box-shadow: ${(props) => props.boxShadow || "0 0 10px gray"};
   box-sizing: ${(props) => props.boxSizing || "border-box"};
`
