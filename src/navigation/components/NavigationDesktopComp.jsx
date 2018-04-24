import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logoDark from '../../assets/icons/wilier-logo-dark.png';
import searchIcon from '../../assets/icons/icons-search-dark-md.png';
import shoppingCardIcon from '../../assets/icons/icons-shopping-cart-dark-lg.png';

const MenuStyled = styled.menu`
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  height: 3.75em;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: var(--color-primary-white);
  @media (max-width: 1024px) { display: none; }
  @media (min-width: 1024px) { display: flex; }
  & > * {
    @media all and (max-width: 1024px) { display: none; }
  }
`

const MenuLogo = styled.img`
  position: absolute;
  margin: 0;
  padding: 0;
  @media all and (max-width: : 1024px) { display: none; }
  @media all and (min-width: 1024px) { margin-left: 2.5vw; width: 13vw;}
  @media all and (min-width: 1280px) { margin-left: 2.7vw; width: 14em;}
`

const MenuListItems = styled.ul`
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  list-style-type: none;
  margin: 0 auto;

  position: relative;
  @media all and (max-width: : 1024px) { display: none; }
  @media all and (min-width: 1024px) { display: flex; font-size: 1.25rem; padding: 0 2.5vw 0;}
  @media all and (min-width: 1280px) { font-size: 1.3rem;  } padding: 0 0 0 10em;

  & > a { /* Navlink */
    align-items: center;
    margin: 0;
    font-family: var(--ft-source-pro);
    font-weight: var(--ft-weight-reg);
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    color: var(--color-primary-grey);
    @media all and (max-width: : 1024px) { display: none; }
    @media all and (min-width: 1024px) { display: flex; font-size: 1.25rem; padding: 0 2.5vw 0;}
    @media all and (min-width: 1280px) { font-size: 1.3rem;  padding: 0 2.5em 0; }

    &:hover {
      color: var(--color-primary-red);
      transition: color 150ms ease-in;
    }
  }
  & > a:active {
    color: var(--main-color-grey);
  }
`

const MenuSearchShoppingGroup = styled.div`
  position: absolute;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  right: 0;
  @media (max-width: 1024px) { display: none; }
`

const MenuSearchLogo = styled.img`
  position: relative;
  cursor: pointer;
  @media (max-width: : 1024px) { display: none; }
  @media (min-width: 1024px) { margin-right: 2.5vw; }
  @media (min-width: 1280px) { margin-right: 2.7vw; }
`
const MenuShoppingCartLogo = styled.img`
  position: relative;
  cursor: pointer;
  @media (min-width: 1024px) { margin-right: 2.5vw; }
  @media (min-width: 1280px) { margin-right: 2.7vw; }
`

const NavigationDesktopComp = ({props, onClick}) => (
  <MenuStyled>
    <MenuLogo src={logoDark} alt={"logo-willier"}/>
    <MenuListItems>
    {props.map((el, index) =>
      <NavLink to={el.route} key={index}>{el.text}</NavLink>
    )}
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
