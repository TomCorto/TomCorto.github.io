import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import { NavLink } from 'react-router-dom';
import { MenuContainer, ItemStyled, ClosedItems } from './NavigationMenuSlidingCompStyles';
import FontAwesome from 'react-fontawesome';
import iconArrow from  '../../../assets/icons/icons-menu-arrow-grey.png';


const Link = ({ className, children, toLink }) => (
  <NavLink to={toLink} className={className}>{children}</NavLink>
);

const NavLinkStyled = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: auto;
  height: 48px;
  color: blue;
  border-bottom: 1px solid var(--color-primary-grey);
  text-decoration: none;
  @media all and (max-width: 480px) { padding: 0 2vw 0; }
  @media all and (min-width: 480px) and (max-width: 768px){ padding: 0 2vw 0; }
  @media all and (min-width: 768px) and (max-width: 1024px){ padding: 0 2vw 0; }
`

@inject('NavigationStore')
@observer
export default class NavigationMenuSlidingComp extends Component {
  constructor(props) {
    super(props);
    this.toggleSideMenu = this.toggleSideMenu.bind(this);
  }

  toggleSideMenu(e) {
    e.preventDefault();
    const { toggleMenuMobile } = this.props.NavigationStore;
    toggleMenuMobile();
  }

  render() {
    const { MenuToggleMobile, MenuItemsList } = this.props.NavigationStore;
    return (
      <MenuContainer in={MenuToggleMobile}>
        <ClosedItems onClick={this.toggleSideMenu} >
          <FontAwesome
            className='super-crazy-colors'
            name='times'
            size='lg'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
          <ItemStyled colorProps="white">Fermer</ItemStyled>
        </ClosedItems>
        {MenuItemsList.map((el, index) =>
          <NavLinkStyled toLink={el.route} key={index}>
          <ItemStyled>{el.text}</ItemStyled>
          <img src={iconArrow} alt=""/>
          </NavLinkStyled>
        )
      }
      </MenuContainer>
    )
  }
}
