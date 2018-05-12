import React, { Component } from 'react';
import styled from 'styled-components';
import BarComp from '../components/product/navigation/BarComp';
import ProductComp from '../components/product/product/ProductComp';
import InfoBarComp from '../components/product/infobar/InfoBarComp';


const Container = styled.section`
  overflow: hidden;
  top: 0;
  margin: 0;
  padding: 0;

`

export default class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      msg: 'Product Page'
    }
  }

  render() {
    return(
      <Container>
        <BarComp />
        <ProductComp />
        <InfoBarComp />
      </Container>
    )
  }
}
