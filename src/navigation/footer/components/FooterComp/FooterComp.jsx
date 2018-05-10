import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Logo, FooterGroupItems, FooterItemsList, FooterItems } from './FooterCompStyles';
import imgLogo from '../../../../assets/icons/wilier-logo-light.png';
import FooterSubscribeComp from '../FooterSubscribeComp/FooterSubscribeComp';

const LinkItems = ({ className }) => (
  <Link to="/home" className={className}>
    <Logo src={imgLogo} alt={"Logo"}/>
  </Link>
)

const SubscribeComp = ({ className }) => (
  <FooterSubscribeComp />
)

const SubscribeCompStyled = styled(SubscribeComp)`
  @media all and (max-width: 480px) {
    margin: 2em 0 0 0;
  }
`


const FooterComp = ({propListItem, displaySubscribeComp}) => (
  <Container>
    <LinkItems />
    <SubscribeCompStyled />
    <FooterGroupItems>
    <FooterItemsList>
        {propListItem.map((el, index) =>
          <Link key={index} to={el.route}>
            <FooterItems>{el.text}</FooterItems>
          </Link>
        )}
    </FooterItemsList>
    </FooterGroupItems>
  </Container>
);

export default FooterComp;
