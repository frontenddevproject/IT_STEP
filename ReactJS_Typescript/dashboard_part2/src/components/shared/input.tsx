import styled from 'styled-components';

interface InputPropsInterface {
   width?: string;
   height?: string;
   backgroundColor?: string;
   border?: string;
   borderColor?: string;
   borderRadius?: string;
   color?: string;
   fontSize?: string;
   fontWeight?: string;
}

export const Input = styled.input<InputPropsInterface>`
   width: ${(props) => props.width || "auto"};
   height: ${(props) => props.height || "auto"};
   background-color: ${(props) => props.backgroundColor || "inherit" };
   border: ${(props) => props.border || "1px solid black"};
   border-color: ${(props) => props.borderColor || "black"};
   border-radius: ${(props) => props.borderRadius || "0px"};
   color: ${(props) => props.color || "black"};
   font-size: ${(props) => props.fontSize || "16px"};
   font-weight: ${(props) => props.fontWeight || "400"};
`