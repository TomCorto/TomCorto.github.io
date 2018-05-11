import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, ProductRange } from './BarCompStyles';

@inject('ProductStore')
@observer
export default class BarComp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { msgTest } = this.props.ProductStore;
    return (
      <Container>
        Container
        {msgTest}
      </Container>
    )
  }
}
