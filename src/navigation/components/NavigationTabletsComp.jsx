import React from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
//import NavigationMenuSliding from './NavigationMenuSliding';
import logoDark from '../../assets/icons/wilier-logo-dark.png';
import searchIcon from '../../assets/icons/icons-search-dark-md.png';
import shoppingCardIcon from '../../assets/icons/icons-shopping-cart-dark-lg.png';


const MenuStyled = styled.menu`
  /*position: absolute; À enlever quand tout seras ok */
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 3em;
  margin: 0;
  padding: 0;
  width: 100%;
  user-select: none;
  background-color: var(--color-primary-white);
  @media (max-width: 1024px) { display: flex; }
  @media (min-width: 1024px) { display: none; }
`

const HamburgerMenuContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 768px) { margin-left: 2.7vw; }
  @media (min-width: 768px) { margin-left: 2.5vw; }
  @media (max-width: 1024px) { margin-left: 2.5vw; }
`
const HamburgerMenuSpan = styled.span`
  background-color: black; border-radius: 2px;
  &:first-child { margin-bottom: 5px; }
  &:last-child { margin-top: 5px; }
  @media (max-width: 768px) {  }
  @media (min-width: 768px) {  }
  @media (max-width: 1024px) { height: 3px; width: 32px; }
`

const HamburgerMenu = ({onClick}) => (
  <HamburgerMenuContainer onClick={onClick}>
    <HamburgerMenuSpan></HamburgerMenuSpan>
    <HamburgerMenuSpan></HamburgerMenuSpan>
    <HamburgerMenuSpan></HamburgerMenuSpan>
  </HamburgerMenuContainer>
);

const MenuLogo = styled.img`
  position: relative;
  margin: 0;
  padding: 0;
  @media all and (max-width: 480px) {  display: flex; width: 22vw; }
  @media all and (min-width: 480px) and (max-width: 768px) {  display: flex; width: 20vw; }
  @media all and (min-width: 768px) and (max-width: 1024px) { display: flex; width: 13vw; }
  @media all and (min-width: 1024px) { display: none; }
`

const MenuSearchLogo = styled.img`
  height: 22px;
  width: 22px;
  position: relative;
  @media (max-width: 480px) { display: flex; margin-right: 2.7vw; }
  @media (min-width: 480px) and (max-width: 768px) { display: flex; margin-right: 2.5vw; }
  @media (min-width: 768px) and (max-width: 1024px) { display: flex; margin-right: 2.5vw; }
  @media (min-width: 1024px) { display: none; }
`

const MenuShoppingCartLogo = styled.img`
  position: relative;
  cursor: pointer;
  @media (min-width: 1024px) { margin-right: 2.5vw; }
  @media (min-width: 1280px) { margin-right: 2.7vw; }
`
const MenuSearchCardGroupStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) { width: 5.5em;  margin-right: 2.7vw; }
  @media all and (min-width: 768px) and (max-width: 1024px)  { width: 6em; margin-right: 2.5vw; }
`
const MenuSearchCardGroup = ({onClick}) => (
  <MenuSearchCardGroupStyled>
    <MenuSearchLogo src={searchIcon} alt={"Search Logo"} onClick={onClick} />
    <MenuShoppingCartLogo src={shoppingCardIcon} alt={"Shopping Card Logo"} />
  </MenuSearchCardGroupStyled>
);

const NavigationTabletsComp = ({props, onClick, onClickMenu}) => (
  <MenuStyled>
    <HamburgerMenu onClick={onClickMenu}/>
    <MenuLogo src={logoDark} alt={"logo-willier"}/>
    <MenuSearchCardGroup onClick={onClick} />
  </MenuStyled>
);

export default NavigationTabletsComp;
