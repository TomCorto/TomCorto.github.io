import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import FooterComp from './components/FooterComp/FooterComp';

const Container = styled.footer`
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
  render() {
    const { FooterItemsList, WindowWidthProps } = this.props.NavigationStore;
    return(
      <Container>
        <FooterComp propListItem={FooterItemsList} displaySubscribeComp={WindowWidthProps}/>
      </Container>
    )
  }
}
