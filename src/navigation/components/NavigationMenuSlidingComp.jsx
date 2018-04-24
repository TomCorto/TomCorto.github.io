import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
//import { slide as Menu } from 'react-burger-menu';

import iconArrow from  '../../assets/icons/icons-menu-arrow-grey.png';

const MenuContainer = styled.div`
  position: absolute;
  color: white;
  background-color: white;
  width: 300px;
  height: 90vh;
  border: 1px solid grey;
`

const Link = ({ className, children, toLink }) => (
  <NavLink to={toLink} className={className}>{children}</NavLink>
)
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

const ItemStyled = styled.span`
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  font-size: 1.25rem;
  color: var(--color-primary-grey);
`

export default class NavigationMenuSlidingComp extends Component {
  constructor(props) {
    super(props);
    this.state = { msg: 'Test'}
  }
  render() {
    return (
      <MenuContainer>
        {this.props.propsMenu.map((el, index) =>
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


/*
<Menu styles={ styles } width={"300px"} isOpen={false} noOverlay disableOverlayClick>
  <a id="home" className="menu-item" href="/">Home</a>
  <a id="about" className="menu-item" href="/about">About</a>
  <a id="contact" className="menu-item" href="/contact">Contact</a>
  <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
</Menu>


const styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '33px',
    height: '33px',
    left: '2.5vw',
    top: ''
  },
  bmBurgerBars: {
    background: '#373a47',
    height: '3px',
    left: '3px',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
 */
