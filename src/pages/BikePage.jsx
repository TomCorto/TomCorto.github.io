import React, { Component } from 'react';
import styled from 'styled-components';
import BikeLandingComp from '../components/bikes/Landing/BikesLandingComp';
import BikeMainComp from '../components/bikes/main/BikeMainComp';

const Container = styled.div`
  //margin-top: 3.75em;
`

export default class BikePage extends Component {
  constructor() {
    super();
    this.state = {
      msg: 'Bike Page'
    }
  }

  render() {
    return (
      <Container>
        <BikeLandingComp />
        <BikeMainComp />
      </Container>
    )
  }
}
