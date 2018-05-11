import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
//import { Link } from 'react-router-dom';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import FontAwesome from 'react-fontawesome';
import { Container, ProductRange, ProductLocalNavigation, NavigationItems, ProductRangeText, ProductRangeIcon } from './BarCompStyles';

@inject('ProductStore')
@observer
export default class BarComp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { msgTest } = this.props.ProductStore;
    return (
      <Container>
        <ProductRange>
          <ProductRangeText>Autres Gammes Velos</ProductRangeText>
          <ProductRangeIcon>
            <FontAwesome
              name='angle-down'
              size='lg'
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />
          </ProductRangeIcon>
        </ProductRange>
        <ProductLocalNavigation>
          <NavigationItems><a onClick={() => scroll.scrollTo(100)}>Vélos</a></NavigationItems>
          <NavigationItems><a onClick={() => scroll.scrollTo(100)}>Description</a></NavigationItems>
          <NavigationItems><a onClick={() => scroll.scrollTo(100)}>Caractéristiques</a></NavigationItems>
          <NavigationItems><a onClick={() => scroll.scrollTo(100)}>Géométrie Cadre</a></NavigationItems>
          <NavigationItems><a onClick={() => scroll.scrollTo(100)}>Comparer</a></NavigationItems>
        </ProductLocalNavigation>
      </Container>
    )
  }
}
