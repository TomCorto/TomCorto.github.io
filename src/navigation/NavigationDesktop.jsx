import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import NavigationDesktopComp from './components/NavigationDesktopComp';

@inject('NavigationStore')
@observer
export default class NavigationDesktop extends Component {
  constructor() {
    super();
    this.toggleSearchBar = this.toggleSearchBar.bind(this);
  }

  toggleSearchBar() {
    const { toggleSearch } = this.props.NavigationStore;
    toggleSearch();
  }

  render()   {
    const { MenuItemsList } = this.props.NavigationStore;
    return (
      <nav>
        <NavigationDesktopComp props={MenuItemsList} onClick={this.toggleSearchBar} />
      </nav>
    )
  }
}
