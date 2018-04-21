import React, { Component } from 'react';

export default class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      msg: 'Product Page'
    }
  }

  render() {
    return(
      <div>{this.state.msg}</div>
    )
  }
}
