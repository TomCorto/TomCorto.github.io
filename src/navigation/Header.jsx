import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import MediaQuery from 'react-responsive';
import NavigationDesktop from './NavigationDesktop';
import NavigationTablets from './NavigationTablets';
import SearchDesktopContainer from './SearchDesktopContainer';
import NavigationMenuSlidingComp from './components/MenuOpenMobile/NavigationMenuSlidingComp';


@inject('NavigationStore')
@observer
export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      msg: 'Header Group',
      windowWidth: 0,
      width: 0,
      height: 0
    }

  }


  render() {
    const { SearchToggle, MenuToggle, MenuItemsList, MenuToggleMobile } = this.props.NavigationStore;

    return (
      <header>
        <MediaQuery minDeviceWidth={768}>
          <NavigationTablets />
        </MediaQuery>
        <MediaQuery minDeviceWidth={1024}>
          <NavigationDesktop />
        </MediaQuery>
        <SearchDesktopContainer />
        <NavigationMenuSlidingComp />
      </header>
    )
  }
}

// { SearchToggle ? <SearchDesktopContainer /> : null }
