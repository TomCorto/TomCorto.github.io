import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import NavigationDesktopComp from './components/MenuDesktop/NavigationDesktopComp';
import NavigationDesktopOpen from './components/MenuOpenDesktop/NavigationDesktopOpen';


@inject('NavigationStore')
@observer
export default class NavigationDesktop extends Component {
  constructor() {
    super();
    this.toggleSearchBar = this.toggleSearchBar.bind(this);
    this.toggleMenuDesktop = this.toggleMenuDesktop.bind(this);
  }

  toggleSearchBar() {
    const { toggleSearch } = this.props.NavigationStore;
    toggleSearch();
  }

  toggleMenuDesktop() {
    const { toggleMenuDesktop } = this.props.NavigationStore;
    toggleMenuDesktop();
  }

  render()   {
    const { MenuItemsList, ScrollListener, toggleMenuScroll } = this.props.NavigationStore;
    return (
      <nav>
        <NavigationDesktopComp
          props={MenuItemsList}
          onClick={this.toggleSearchBar}
          onHoverBikes={this.toggleMenuDesktop}
          menuDesktopStateBool={ScrollListener}
        />
        <NavigationDesktopOpen />
      </nav>
    )
  }
}
