import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import MediaQuery from 'react-responsive';
import NavigationDesktop from './NavigationDesktop';
import NavigationTablets from './NavigationTablets';
import SearchDesktop from './SearchDesktop';
import NavigationMenuSlidingComp from './components/NavigationMenuSlidingComp';

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
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
  console.log(this.state.width);
}

  render() {
    const { SearchToggle, MenuToggle, MenuItemsList } = this.props.NavigationStore;

    return (
      <header>
        <MediaQuery minDeviceWidth={768}>
          <NavigationTablets />
        </MediaQuery>
        <MediaQuery minDeviceWidth={1024}>
          <NavigationDesktop />
        </MediaQuery>
        { SearchToggle ? <SearchDesktop /> : null }
        { MenuToggle ? <NavigationMenuSlidingComp propsMenu={MenuItemsList} /> : null }
      </header>
    )
  }
}

// Structure NavLink
/*       <NavLink to={"/home"}>Home</NavLink> {" "}
      <NavLink to={"/bikes"}>Vélos</NavLink> {" "}
      <NavLink to={"/equipment"}>Equipements</NavLink> {" "}
      <NavLink to={"/accessories"}>Accessoires</NavLink> {" "}
      <NavLink to={"/shop"}>Magasins</NavLink> {" "}
      <NavLink to={"/checkout"}>Panier</NavLink>
*/
