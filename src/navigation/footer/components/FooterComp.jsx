import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import imgLogo from '../../../assets/icons/wilier-logo-light.png';
import FooterSubscribeComp from './FooterSubscribeComp';

const FooterContainer = styled.div`
  display: grid;
  width: 100vw;
  background-color: var(--color-primary-grey);
  @media all and (min-width: 480px) {
    grid-template-rows: repeat(3, auto);
    grid-template-columns: auto;
    justify-items: center;
    align-items: space-around;
    align-content: space-around;
    height: 20em;
  }
  @media all and (min-width: 768px) {
    grid-template-rows: repeat(3, auto);
    grid-template-columns: auto;
    justify-items: center;
    align-items: space-around;
    align-content: space-around;
    height: 20em;
  }
  @media all and (min-width: 1024px) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: auto;
    justify-items: center;
    align-items: space-around;
    align-content: space-around;
    height: 15em;
  }
`

const Logo = styled.img`
  grid: 1 / 1 / -1 / 1;
  justify-content: center;
`

const FooterGroupItems = styled.ul`
  grid: 1 / 2 / -1 / -1;
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`

const FooterItemsList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  padding: 0;
  @media all and (max-width: 480px) { width: 90vw; }
  @media all and (min-width: 480px) { width: 90vw; }
  @media all and (min-width: 768px) { width: 80vw; }
  @media all and (min-width: 1024px) { width: 60vw; }
`

const FooterItems = styled.li`
  font-family: var(--ft-source-pro);
  font-size: 1.2rem;
  font-weight: var(--ft-weight-semi);
  color: var(--color-primary-white);
`

const FooterComp = ({propListItem, displaySubscribeComp}) => (
  <FooterContainer>
    <Logo src={imgLogo} alt={"Logo"}/>
    <FooterGroupItems>
      { displaySubscribeComp >= 1024 ? <FooterSubscribeComp /> : null }
      <FooterItemsList>
        {propListItem.map((el, index) =>
          <NavLink key={index} to={el.route}>
            <FooterItems>{el.text}</FooterItems>
          </NavLink>
        )}
      </FooterItemsList>
    </FooterGroupItems>
  </FooterContainer>
);

export default FooterComp;
//       { displaySubscribeComp >= 1024 ? <FooterSubscribeComp /> : null }
