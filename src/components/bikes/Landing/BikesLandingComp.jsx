import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, H2Styled, ButtonBikeFinder, ButtonBikeLink } from './BikesLandingStyles';


@inject('BikeStore')
@observer
export default class BikeLandingComp extends Component {
  render() {
    const { landingBikeObject } = this.props.BikeStore;
    return (
      <Container>
        <H2Styled>{landingBikeObject.h2Text}</H2Styled>
        <ButtonBikeLink>{landingBikeObject.buttonLink}</ButtonBikeLink>
        <ButtonBikeFinder>{landingBikeObject.buttonFinder}</ButtonBikeFinder>
      </Container>
    )
  }
}
