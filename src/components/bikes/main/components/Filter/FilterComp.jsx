import React, { Component } from 'react';
import { Container, SelectorSelect, SelectorOption, ItemsCount } from './FilterCompStyles';

export default class FilterComp extends Component {
  render() {
    return (
      <Container>
        <SelectorSelect>
          <SelectorOption>Prix Croissant</SelectorOption>
          <SelectorOption>Prix Décroissant</SelectorOption>
          <SelectorOption>Tri Croissant</SelectorOption>
        </SelectorSelect>
        <ItemsCount>24 résultats</ItemsCount>
      </Container>
    )
  }
}
