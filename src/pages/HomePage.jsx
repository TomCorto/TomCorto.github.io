import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import HomeLandingComp from '../components/home/landing/HomeLandingComp';
import HomeNewsComp from '../components/home/news/HomeNewsComp';
import HomeCategoryComp from '../components/home/category/HomeCategoryComp';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'Home'
    }
  }

  render() {
    return (
      <div>
        <HomeLandingComp />
        <MediaQuery minDeviceWidth={1024}>
          <HomeNewsComp />
          <HomeCategoryComp />
        </MediaQuery>
      </div>
    )
  }
}
