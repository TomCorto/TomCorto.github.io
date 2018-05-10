import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, MenuContainer, MenuListItems, MenuTitleItems, MenuItems, ButtonSelectBike } from './NavigationDesktopOpenStyled';
import { inject, observer } from 'mobx-react';

@inject('NavigationStore')
@observer
export default class NavigationDesktopOpen extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const { toggleMenuDesktop, MenuToggleDesktop } = this.props.NavigationStore;
    toggleMenuDesktop();
  }

  render() {
    const { MenuToggleDesktop } = this.props.NavigationStore;
    return (
      <Container onClick={this.toggleMenu} onMouseLeave={this.toggleMenu} unmountOnExit in={MenuToggleDesktop}>
        <ButtonSelectBike type="button">Trouver votre vélo</ButtonSelectBike>
        <MenuContainer>
          <MenuListItems>
              <MenuTitleItems><NavLink to={"/bikes/road"}>Route</NavLink></MenuTitleItems>
              <MenuItems><NavLink to={"/bikes/road/performance"}>Vélo Performance</NavLink></MenuItems>
              <MenuItems><NavLink to={"/bikes/road/endurance"}>Vélo Endurance</NavLink></MenuItems>
              <MenuItems><NavLink to={"/bikes/road/clm"}>Contre-la-montre</NavLink></MenuItems>
              <MenuItems><NavLink to={"/bikes/road/gravel"}>Gravel</NavLink></MenuItems>
          </MenuListItems>
          <MenuListItems>
              <MenuTitleItems><NavLink to={"/bikes/mtb"}>VTT</NavLink></MenuTitleItems>
              <MenuItems><NavLink to={"/bikes/mtb/cross-country"}>Cross-Country</NavLink></MenuItems>
              <MenuItems><NavLink to={"/bikes/mtb/trail"}>Trail Enduro</NavLink></MenuItems>
              <MenuItems><NavLink to={"/bikes/mtb/downhill"}>Descente</NavLink></MenuItems>
          </MenuListItems>
          <MenuListItems>
              <MenuTitleItems><NavLink to={"/fitness-vae"}>Fitness et VAE</NavLink></MenuTitleItems>
              <MenuItems><NavLink to={"/fitness-vae/fitness"}>Fitness</NavLink></MenuItems>
              <MenuItems><NavLink to={"/fitness-vae/vae"}>Vélos Électriques</NavLink></MenuItems>
          </MenuListItems>
        </MenuContainer>
      </Container>
    )
  }
}
