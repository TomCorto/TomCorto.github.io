import styled from 'styled-components';
import transition from "styled-transition-group";

export const Container = transition.div`
  position: absolute;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 3.75em;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: var(--color-primary-white);
  z-index: 100000;
  @media all and (max-width: 1024px) { display: flex; }
  & > * {
    @media all and (max-width: 1024px) { display: none; }
  }

  &:enter {
    opacity: 0.01;
    transform: translateY(-50%);
  }
  &:enter-active {
    opacity: 1;
    transform: translateY(0%);
    transition: all 150ms ease-in;
  }
  &:exit {
    opacity: 1;
    transform: translateY(0%);
  }
  &:exit-active {
    opacity: 0.01;
    transform: translateY(-50%);
    transition: all 150ms ease-in;
  }
`

export const SearchIconStyled = styled.img`
  margin-right: 10px;
`

export const SearchLabelStyled = styled.label`
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`

export const SearchInputStyled = styled.input`
  font-family: var(--ft-source-pro);
  font-weight: 400;
  font-size: 18px;
  border: none;
  color: rgba(78, 78, 78, 0.4);
  border-bottom: 1px solid var(--color-primary-grey);
  @media all and (max-width: 1024px) { width: 50vw; }
  @media all and (min-width: 1024px) { width: 30em; }
`

export const ButtonStyled = styled.button`
  font-family: var(--ft-source-pro);
  font-weight: 400;
  background: transparent;
  border-radius: 1px;
  border: 1px solid var(--color-primary-grey);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  @media all and (max-width: 1024px) { height: 2.5em; width: 8em; margin-left: 1em; font-size: 0.9rem; }
  @media all and (min-width: 1024px) { height: 2.5em; width: 8em; margin-left: 0.5em; font-size: 0.9rem; }
  &:hover {
    box-shadow: 1px 1px 1px var(--color-primary-grey);
  }
`
