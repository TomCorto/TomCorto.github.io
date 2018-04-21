import React, { Component } from 'react';

export default class ShopPage extends Component {
  constructor() {
    super();
    this.state = {
      msg: 'Shop Page'
    }
  }

  render() {
    return(
      <div>{this.state.msg}</div>
    )
  }
}
