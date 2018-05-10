import styled from 'styled-components';

export const Container = styled.menu`
  position: fixed;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 3em;
  margin: 0;
  padding: 0;
  width: 100%;
  user-select: none;
  background-color: var(--color-primary-white);
  z-index: 1000;
  @media (max-width: 1024px) { display: flex; }
  @media (min-width: 1024px) { display: none; }
`

export const HamburgerMenuContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 768px) { margin-left: 2.7vw; }
  @media (min-width: 768px) { margin-left: 2.5vw; }
  @media (max-width: 1024px) { margin-left: 2.5vw; }
`

export const HamburgerMenuSpan = styled.span`
  background-color: black; border-radius: 2px;
  &:first-child { margin-bottom: 5px; }
  &:last-child { margin-top: 5px; }
  @media (max-width: 768px) {  }
  @media (min-width: 768px) {  }
  @media (max-width: 1024px) { height: 3px; width: 32px; }
`

export const MenuLogo = styled.img`
  position: relative;
  margin: 0;
  padding: 0;
  @media all and (max-width: 480px) {  display: flex; width: 22vw; }
  @media all and (min-width: 480px) and (max-width: 768px) {  display: flex; width: 20vw; }
  @media all and (min-width: 768px) and (max-width: 1024px) { display: flex; width: 13vw; }
  @media all and (min-width: 1024px) { display: none; }
`

export const MenuSearchLogo = styled.img`
  height: 22px;
  width: 22px;
  position: relative;
  @media (max-width: 480px) { display: flex; margin-right: 2.7vw; }
  @media (min-width: 480px) and (max-width: 768px) { display: flex; margin-right: 2.5vw; }
  @media (min-width: 768px) and (max-width: 1024px) { display: flex; margin-right: 2.5vw; }
  @media (min-width: 1024px) { display: none; }
`

export const MenuShoppingCartLogo = styled.img`
  position: relative;
  cursor: pointer;
  @media (min-width: 1024px) { margin-right: 2.5vw; }
  @media (min-width: 1280px) { margin-right: 2.7vw; }
`

export const MenuSearchCardGroupStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) { width: 5.5em;  margin-right: 2.7vw; }
  @media all and (min-width: 768px) and (max-width: 1024px)  { width: 6em; margin-right: 2.5vw; }
`
