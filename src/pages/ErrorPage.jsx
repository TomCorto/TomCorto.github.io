import React, { Component } from 'react';

export default class ErrorPage extends Component {
  constructor() {
    super();
    this.state = {
      msg: 'Error 404'
    }
  }

  render() {
    return (
      <div>{this.state.msg}</div>
    )
  }
}
