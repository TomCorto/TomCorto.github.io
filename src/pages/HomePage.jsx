import React, { Component } from 'react';
import Styled from 'styled-components';

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
