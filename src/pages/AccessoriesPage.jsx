import React, { Component } from 'react';

export default class AccessoriesPage extends Component {
  constructor() {
    super();
    this.state = {
      msg: 'Accessories Page'
    }
  }

  render() {
    return(
      <div>{this.state.msg}</div>
    )
  }
}
