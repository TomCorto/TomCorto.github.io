import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
//import { Link } from 'react-router-dom';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import FontAwesome from 'react-fontawesome';
import { Container, BreadcrumbGroup, ProductLocalNavigation, NavigationItems, BreadCrumbText, ProductRangeIcon, ProductBreadCrumbSeparator } from './BarCompStyles';
import RangeComp from './components/range/RangeComp';
import breadSeparator from '../../../assets/icons/icons-breadcrumb.png';


@inject('ProductStore', 'NavigationStore')
@observer
export default class BarComp extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { barCompObject, toggleBool } = this.props.ProductStore;
    const { MenuToggleDesktop } = this.props.NavigationStore;
    return (
      <Container toggleMenu={MenuToggleDesktop}>
        <BreadcrumbGroup>
          <BreadCrumbText>Vélos</BreadCrumbText>
          <ProductBreadCrumbSeparator src={breadSeparator} />
          <BreadCrumbText>Gammes Routes</BreadCrumbText>
          <ProductBreadCrumbSeparator src={breadSeparator} />
          <BreadCrumbText>Cento 10 NDR</BreadCrumbText>
        </BreadcrumbGroup>
        <ProductLocalNavigation>
          <NavigationItems><a onClick={() => scroll.scrollTo(100)}>Vélos</a></NavigationItems>
          <NavigationItems><a onClick={() => scroll.scrollTo(100)}>Description</a></NavigationItems>
          <NavigationItems><a onClick={() => scroll.scrollTo(100)}>Caractéristiques</a></NavigationItems>
          <NavigationItems><a onClick={() => scroll.scrollTo(100)}>Géométrie Cadre</a></NavigationItems>
          <NavigationItems><a onClick={() => scroll.scrollTo(100)}>Comparer</a></NavigationItems>
        </ProductLocalNavigation>
        { barCompObject.toggleBool ? <RangeComp /> : null }
      </Container>
    )
  }
}

/*
<FontAwesome
  name='angle-down'
  size='lg'
  style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
/>
 */
