import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, H2Styled, ButtonBikeFinder, ButtonBikeLink } from './BikesLandingStyles';

@inject('BikeStore')
@observer
export default class BikeLandingComp extends Component {
  render() {
    const { h2Text } = this.props.BikeStore;
    return (
      <Container>
        <H2Styled>{h2Text}</H2Styled>
        <ButtonBikeLink>Trouvez votre vélo</ButtonBikeLink>
        <ButtonBikeFinder>Guide Vélos</ButtonBikeFinder>
      </Container>
    )
  }
}
