import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import FooterComp from './components/FooterComp';

const FooterStyled = styled.footer`
  position: fixed;
  bottom: 0;
`
@inject('NavigationStore')
@observer
export default class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <FooterStyled>
        <FooterComp />
      </FooterStyled>
    )
  }
}
