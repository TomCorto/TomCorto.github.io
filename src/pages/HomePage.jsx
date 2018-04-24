import React, { Component } from 'react';

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
        {this.state.msg}
      </div>
    )
  }
}
