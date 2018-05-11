import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import NavigationTabletsComp from './components/MenuMobile/NavigationTabletsComp';


@inject('NavigationStore')
@observer
export default class NavigationTablets extends Component {
  constructor() {
    super();
    this.toggleSearchBar = this.toggleSearchBar.bind(this);
    this.toggleSideMenu = this.toggleSideMenu.bind(this);
  }

  toggleSearchBar() {
    const { toggleSearch } = this.props.NavigationStore;
    toggleSearch();
  }

  toggleSideMenu() {
    const { toggleMenuMobile } = this.props.NavigationStore;
    toggleMenuMobile();
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
