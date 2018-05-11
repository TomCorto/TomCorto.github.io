import React, { Component } from 'react';
import BarComp from '../components/product/BarComp/BarComp';

export default class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      msg: 'Product Page'
    }
  }

  render() {
    return(
      <div>
        <BarComp />
      </div>
    )
  }
}
