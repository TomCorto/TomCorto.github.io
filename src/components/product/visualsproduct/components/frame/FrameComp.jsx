import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Container } from './FrameCompStyles';
import { HeaderRed, TextGroup, TextMain, ImageFrame } from './FrameCompStyles';
import imgSrc from '../../../../../assets/img/product-highlights_cento10ndr_1.png';

@inject('ProductStore')
@observer
export default class FrameComp extends Component {
  render() {
    const { frameObject } = this.props.ProductStore;
    return (
      <Container>
        <TextGroup>
          <HeaderRed>{frameObject.title}</HeaderRed>
          <TextMain>{frameObject.text}</TextMain>
        </TextGroup>
        <ImageFrame src={imgSrc} alt={"Frame Image"} />
      </Container>
    )
  }
}
