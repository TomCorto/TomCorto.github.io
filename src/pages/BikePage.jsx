import React, { Component } from 'react';

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
        {this.state.msg}
      </div>
    )
  }
}
