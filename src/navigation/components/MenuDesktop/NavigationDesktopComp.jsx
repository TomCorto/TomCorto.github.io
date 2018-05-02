import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logoDark from '../../../assets/icons/wilier-logo-dark.png';
import searchIcon from '../../../assets/icons/icons-search-dark-md.png';
import shoppingCardIcon from '../../../assets/icons/icons-shopping-cart-dark-lg.png';
import { MenuStyled, ImgStyled, MenuListItems, MenuSearchLogo, MenuShoppingCartLogo, MenuSearchShoppingGroup,toggleMenuDesktop, MenuSpanItems } from './NavigationDesktopCompStyles';

const Link = ({ className, imgSrc }) => (
  <NavLink className={className} to={'/home'}>
    <ImgStyled src={imgSrc} alt={"logo-willier"} />
  </NavLink>
);

const MenuLogo = styled(Link)`
  position: absolute;
  margin: 0;
  padding: 0;
  @media all and (max-width: : 1024px) { display: none; }
  @media all and (min-width: 1024px) { margin-left: 2.5vw; }
  @media all and (min-width: 1280px) { margin-left: 2.7vw; }
`;

const NavigationDesktopComp = ({props, onHoverBikes, onClick}) => (
  <MenuStyled>
    <MenuLogo imgSrc={logoDark} />
    <MenuListItems>
    <MenuSpanItems onMouseEnter={onHoverBikes}>Vélos</MenuSpanItems>
    <MenuSpanItems>Équipements</MenuSpanItems>
    <MenuSpanItems>Accessoires</MenuSpanItems>
    <MenuSpanItems>Magasins</MenuSpanItems>
    </MenuListItems>
    <MenuSearchShoppingGroup>
      <MenuSearchLogo src={searchIcon} alt={"Search Logo"} onClick={onClick}/>
      <MenuShoppingCartLogo src={shoppingCardIcon} alt={"Shopping Card Logo"} />
    </MenuSearchShoppingGroup>
  </MenuStyled>
);

NavigationDesktopComp.propTypes = {
  props: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default NavigationDesktopComp;

// <NavLink to={el.route} key={index}>{el.text}</NavLink>
//
/*    {props.map((el, index) =>
      <MenuSpanItems key={index}>{el.text}</MenuSpanItems>
    )}
*/
