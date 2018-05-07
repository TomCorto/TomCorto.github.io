import React, { Component } from 'react';
import BikeLandingComp from '../components/bikes/Landing/BikesLandingComp';
import BikeMainComp from '../components/bikes/main/BikeMainComp';

export default class BikePage extends Component {
  constructor() {
    super();
    this.state = {
      msg: 'Bike Page'
    }
  }

  render() {
    return (
      <div>
        <BikeLandingComp />
        <BikeMainComp />
      </div>
    )
  }
}
