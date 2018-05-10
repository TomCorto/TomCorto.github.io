import styled from 'styled-components';
import transition from "styled-transition-group"

export const MenuContainer = transition.div.attrs({
  unmountOnExit: true
}) `
  position: fixed;
  color: white;
  background-color: white;
  width: 40em;
  height: 100%;
  border: 1px solid grey;
  z-index: 1000;
  @media all and (min-width: 1024px) { display: none; }
  &:enter {
    transform: translateX(-200%);
  }
  &:enter-active {
    transform: translateX(0);
    transition: transform 350ms linear;
  }
  &:exit {
    transform: translateX(0);
  }
  &:exit-active {
    transform: translateX(-200%);
    transition: transform 300ms linear;
  }
`

export const ItemStyled = styled.span`
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  font-size: 1.25rem;
  color: ${ props => props.colorProps || "#4E4E4E" }
`

export const ClosedItems = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center;
position: relative;
width: auto;
height: 48px;
color: blue;
border-bottom: 1px solid var(--color-primary-grey);
text-decoration: none;
background: #5d5d5d;
color: var(--color-primary-white);
cursor: pointer;
@media all and (max-width: 480px) { padding: 0 2vw 0; }
@media all and (min-width: 480px) and (max-width: 768px){ padding: 0 2vw 0; }
@media all and (min-width: 768px) and (max-width: 1024px){ padding: 0 2vw 0; }
`
