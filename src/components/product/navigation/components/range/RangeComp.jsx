import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { Container } from './RangeCompStyles';
import ProductSliderComp from '../slider/ProductSliderComp';

@inject('ProductStore')
@observer
export default class RangeComp extends Component {
  constructor() {
    super()
  }

  render() {
    const { rangeObject } = this.props.ProductStore;
    return (
      <Container>
        {rangeObject.text}
      </Container>
    )
  }
}
