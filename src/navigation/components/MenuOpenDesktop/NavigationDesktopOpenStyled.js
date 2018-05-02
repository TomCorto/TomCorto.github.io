import styled from 'styled-components';
import transition from "styled-transition-group"
import imgRoad from '../../../assets/img/menu-background_road.jpg';

export const Container = transition.menu` /* Container General */
  margin: 0;
  padding: 0;
  width: 100%;
  position: absolute;
  background-color: var(--color-primary-white);
  z-index: 1000;
  @media all and (min-width: 1024px) {  }
  @media all and (min-width: 1280px) { height: 200px; }
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: 1fr;

  /*
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
  }*/
`

export const ButtonSelectBike = styled.button`
  height: 32px;
  width: 130px;
  background-color: var(--color-primary-grey);
  border: none;
  color: var(--color-primary-white);
  border-radius: 2px;
  cursor: pointer;
  justify-self: center;
  align-self: center;
  &:hover {
    box-shadow: 2px 2px 2px black;
  }
  @media all and (min-width: 1024px) {  }
`

export const MenuContainer = styled.div`  /* Background image */
  align-self: center;
  height: auto;
  grid-area: 1 / 2 / -1 / 3;
  background-color: transparent;
  display: flex;
  flex-flow: row nowrap;
`

export const MenuListItems = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 50px 0 0;
  padding: 0;
`

export const MenuTitleItems = styled.li`
  color: var(--color-primary-grey);
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  font-size: 1.25rem;
  & > a { color: var(--color-primary-grey); text-decoration: none; }
  @media all and (max-width: 1024px) { margin: 0 0 10px 0; }
  @media all and (min-width: 1024px) { margin: 0 0 10px 0; }
`

export const MenuItems = MenuTitleItems.extend`
  font-weight: normal;
  font-size: 1.1rem;
  cursor: pointer;
  margin: 0;
  @media all and (max-width: 1024px) { margin: 0 0 8px 0; }
  @media all and (min-width: 1024px) { margin: 0 0 8px 0; }
  &:hover {
    text-decoration: underline;
  }
`
