import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, ImgStyled } from './SliderImgCompStyles';
import imgSrc1 from '../../../assets/img/product-Wilier110NDR_100.jpg';
import imgSrc2 from '../../../assets/img/product-Wilier110NDR_124.jpg';

@inject('ProductStore')
@observer
export default class SliderImgComp extends Component {
  render() {
    return (
      <Container>
        <ImgStyled src={imgSrc1} />
        <ImgStyled src={imgSrc2} />
      </Container>
    )
  }
}
