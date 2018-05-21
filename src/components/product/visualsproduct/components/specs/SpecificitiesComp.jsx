import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Container, SpecsContainer1, SpecsContainer2, Text, ImgSpecs, TextGroupStyled } from './SpecificitiesCompStyles';
import { HeaderRed } from '../frame/FrameCompStyles';
import imgSrc1 from '../../../../../assets/img/product-Wilier110NDR_106.png';
import imgSrc2 from '../../../../../assets/img/product-Wilier110NDR_120.png';


@inject('ProductStore')
@observer
export default class SpecificitiesComp extends Component {

  render() {
    const { specsObject1, specsObject2 } = this.props.ProductStore;
    return (
      <Container>
          <SpecsContainer1>
            <ImgSpecs src={imgSrc1} alt={"Img"} />
            <HeaderRed>{specsObject1.title}</HeaderRed>
            <TextGroupStyled>{specsObject1.text}</TextGroupStyled>
          </SpecsContainer1>
          <SpecsContainer2>
            <ImgSpecs src={imgSrc2} alt={"Img"} />
            <HeaderRed>{specsObject2.title}</HeaderRed>
            <TextGroupStyled>{specsObject1.text}</TextGroupStyled>
          </SpecsContainer2>
      </Container>
    )
  }
}
