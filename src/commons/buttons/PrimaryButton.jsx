import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import arrowsIcons from '../../assets/icons/icons-buttons.png';

const BtnStyled = styled.button`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto;
  justify-content: center;
  align-items: center;
  grid-column-gap: 0.8em;
  margin: ${ props => props.propsMargin };
  background: ${ props => props.propsBackground };
  //border: 1px solid rgba(255, 255, 255, 0.1);
  border: none;
  height: 38px;
  width: auto;
  font-size: 0.875rem;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  color: var(--color-primary-white);
  padding: 0 2em 0;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  transition: background 100ms ease-in;
  &:hover {
    background: ${ props => props.propsBackgroundHover };
    transition: background 200ms ease-in;
  }
`

const activeClassName = 'nav-item-active';
const NavItem = styled(NavLink).attrs({
   activeClassName
 })`

color: blue;
text-decoration: none;

 &.${activeClassName} {
   color: black;
   text-decoration: none;
 }
`

const ArrowStyled = styled.img`
  width: auto;
  height: auto;
`

const PrimaryButton = ({bgcolorProps, textProps, propsBackgroundHover, propsArrowBool}) => (
  <NavItem to={"/bike"}>
    <BtnStyled propsBackground={bgcolorProps || "red" } propsBackgroundHover={ propsBackgroundHover || "yellow" }>
      {textProps}
      { propsArrowBool ? <ArrowStyled src={arrowsIcons} alt={"arrows"} /> : null }
    </BtnStyled>
  </NavItem>
);

PrimaryButton.propTypes = {
  bgcolorProps: PropTypes.string.isRequired,
  propsBackgroundHover: PropTypes.string.isRequired,
  textProps: PropTypes.string.isRequired
}

export default PrimaryButton;
