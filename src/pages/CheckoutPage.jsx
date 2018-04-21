import React, { Component } from 'react';

export default class CheckoutPage extends Component {
  constructor() {
    super();
    this.state = {
      msg: 'Checkout Page'
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
