import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Transition } from 'react-transition-group';
import NavigationDesktopComp from './components/MenuDesktop/NavigationDesktopComp';
import NavigationDesktopOpen from './components/MenuOpenDesktop/NavigationDesktopOpen';

const styles = {
  transition: 'all 1s ease-in',
};

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
    const { MenuItemsList, MenuToggleDesktop } = this.props.NavigationStore;
    return (
      <nav>
        <NavigationDesktopComp
          props={MenuItemsList}
          onClick={this.toggleSearchBar}
          onHoverBikes={this.toggleMenuDesktop}
        />
        <NavigationDesktopOpen />
      </nav>
    )
  }
}

/*
// Original
<NavigationDesktopOpen onMouseEnter={this.toggleMenuDesktop} onMouseLeave={this.toggleMenuDesktop} />

{

MenuToggleDesktop ?
  <NavigationDesktopOpen />
  : null }
 */
