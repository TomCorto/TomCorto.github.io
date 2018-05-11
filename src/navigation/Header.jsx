import React, { Component } from 'react';
import styled from 'styled-components';
import NavigationDesktop from './NavigationDesktop';
import NavigationTablets from './NavigationTablets';
import SearchDesktopContainer from './SearchDesktopContainer';
import NavigationMenuSlidingComp from './components/MenuOpenMobile/NavigationMenuSlidingComp';

const HeaderStyled = styled.header`
  z-index: 1000000;
  position: fixed;
  top: 0;
  width: 100%;
`

export default class Header extends Component {
  render() {
    return (
      <HeaderStyled>
        <NavigationDesktop />
        <NavigationTablets />
        <SearchDesktopContainer />
        <NavigationMenuSlidingComp />
      </HeaderStyled>
    )
  }
}
