import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import FooterComp from './components/FooterComp';

const FooterStyled = styled.footer`
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  bottom: 0;
  background-color: green;
`
@inject('NavigationStore')
@observer
export default class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    const { FooterItemsList, WindowWidthProps } = this.props.NavigationStore;
    return(
      <FooterStyled>
        <FooterComp propListItem={FooterItemsList} displaySubscribeComp={WindowWidthProps}/>
      </FooterStyled>
    )
  }
}
