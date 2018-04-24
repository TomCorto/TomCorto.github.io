import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import styled from 'styled-components';

const FooterContainer = styled.div`
  height: 500px;
  width: 100vw;
  background-color: var(--color-primary-grey);
`

const FooterGroupItem = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`

const FooterItems = styled.li`

`

const FooterComp = ({}) => (
  <FooterContainer>
    <FooterGroupItem>
      <FooterItems>

      </FooterItems>
    </FooterGroupItem>
  </FooterContainer>
);

export default FooterComp;
