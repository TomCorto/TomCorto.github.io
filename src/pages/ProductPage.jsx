import React, { Component } from 'react';
import styled from 'styled-components';
import BarComp from '../components/product/navigation/BarComp';
import ProductComp from '../components/product/product/ProductComp';
import InfoBarComp from '../components/product/infobar/InfoBarComp';
import DescriptionComp from '../components/product/description/DescriptionComp';
import SliderImgComp from '../components/product/slider/SliderImgComp';
import VisualComp from '../components/product/visualsproduct/VisualComp';
import CharacteristicsComp from '../components/product/characteristics/CharacteristicsComp';
import FrameComp from '../components/product/frame/FrameComp';

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
        <DescriptionComp />
        <SliderImgComp />
        <VisualComp />
        <CharacteristicsComp />
        <FrameComp />
      </Container>
    )
  }
}
