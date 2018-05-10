import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, HamburgerMenuContainer, HamburgerMenuSpan, MenuLogo, MenuSearchLogo, MenuShoppingCartLogo, MenuSearchCardGroupStyled } from './NavigationTabletsCompStyles';
import logoDark from '../../../assets/icons/wilier-logo-dark.png';
import searchIcon from '../../../assets/icons/icons-search-dark-md.png';
import shoppingCardIcon from '../../../assets/icons/icons-shopping-cart-dark-lg.png';


const HamburgerMenu = ({onClick}) => (
  <HamburgerMenuContainer onClick={onClick}>
    <HamburgerMenuSpan></HamburgerMenuSpan>
    <HamburgerMenuSpan></HamburgerMenuSpan>
    <HamburgerMenuSpan></HamburgerMenuSpan>
  </HamburgerMenuContainer>
);

const MenuSearchCardGroup = ({onClick}) => (
  <MenuSearchCardGroupStyled>
    <MenuSearchLogo src={searchIcon} alt={"Search Logo"} onClick={onClick} />
    <MenuShoppingCartLogo src={shoppingCardIcon} alt={"Shopping Card Logo"} />
  </MenuSearchCardGroupStyled>
);

// Components Exported
const NavigationTabletsComp = ({props, onClick, onClickMenu}) => (
  <Container>
    <HamburgerMenu onClick={onClickMenu}/>
    <Link to={"/home"}><MenuLogo src={logoDark} alt={"logo-willier"}/></Link>
    <MenuSearchCardGroup onClick={onClick} />
  </Container>
);

export default NavigationTabletsComp;
