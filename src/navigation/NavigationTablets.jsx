import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import NavigationTabletsComp from './components/NavigationTabletsComp';
import SearchDesktop from './components/SearchDesktop/SearchDesktopComp';


@inject('NavigationStore')
@observer
export default class NavigationTablets extends Component {
  constructor() {
    super();
    this.toggleSearchBar = this.toggleSearchBar.bind(this);
    this.toggleSideMenu = this.toggleSideMenu.bind(this);
  }

  toggleSearchBar() {
    const { toggleSearch} = this.props.NavigationStore;
    toggleSearch();
  }

  toggleSideMenu() {
    const { toggleMenu, MenuToggle } = this.props.NavigationStore;
    toggleMenu();
  }

  render()   {
    const { MenuItemsList } = this.props.NavigationStore;
    return (
      <nav>
        <NavigationTabletsComp onClick={this.toggleSearchBar} onClickMenu={this.toggleSideMenu} />
      </nav>
    )
  }
}
