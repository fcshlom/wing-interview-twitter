import styled, { keyframes } from "styled-components"
const fadeOut = keyframes`
from {
    opacity: 0.5;
}
to {
    opacity: 1;
}
`
const fadeIn = keyframes`
from {
    opacity: 1;
}
to {
    opacity: 0.5;
}
`

export const PageContainer = styled.div`
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100vh;
    max-width: 600px;
`
export const DialogBackdrop = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    animation: ${fadeOut} 0.5s linear;
`
export const DialogContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 600px;
    padding: 20px;
    background: white;
    border-radius: 15px;
    animation: ${fadeOut} 0.5s linear;
`

export const Container = styled.div<{$useFullBorders?: boolean}>`
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    border-left: ${props => props.$useFullBorders ? '1px solid lightgray' : 'none'};
    border-right: ${props => props.$useFullBorders ? '1px solid lightgray' : 'none'};
    border-radius: ${props => props.$useFullBorders ? '15px' : 0};
    padding: 20px;
    display: flex;
    margin: 20px;    
    max-width: 600px;
    flex-direction: column;
`

export const UserTitle = styled.div<{$underline?: boolean}>`
    font-size: 14px;
    font-weight: bold;
    padding: 10px;
    ${props => props.$underline ? 'text-decoration: underline dashed from-font' : ''};
    text-underline-offset: 8px;
    text-transform: capitalize;'
    font-family: 'Roboto', sans-serif;
`

export const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px
`

export const VSeperator = styled.div`
    width: 1px;
    height: 25px;
    background-color: lightgray;
    `
export const Counter = styled.div<{$isErorr?: boolean;}>`
    font-size: 20px;
    color: ${props => props.$isErorr ? 'red' : 'darkgray'};
    font-family: 'Roboto', sans-serif;
    `

export const BaseButton = styled.button<{disabled: boolean}>`
  border-radius: 20px;
  border: none;
  font-weight: bold;
  padding: 10px 15px;
  background: #1d9bf0;
  animation: ${props => props.disabled? fadeIn : fadeOut} 0.5s ease;
  opacity: ${props => props.disabled? 0.5 : 1} ;
  color: white;
  width: max-content; 
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  font-family: 'Roboto', sans-serif;
`;

export const TextAreaInput = styled.textarea`
  width: auto;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  color: black;
  outline: none;
  resize:none;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
}
`;

export const Div = styled.div`
    font-size: 18px;
    padding: 0 10px;
`


export const Date = styled.div`
    font-size: 12px;
    font-weight: 700;    
    margin: 10px 0;
    color: #a8a8a8;
    padding-left: 10px;
    `

