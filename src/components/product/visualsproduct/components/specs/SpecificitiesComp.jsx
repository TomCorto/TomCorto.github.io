import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Container, SpecsContainer1, SpecsContainer2, Text, ImgSpecs } from './SpecificitiesCompStyles';
import { HeaderRed } from '../frame/FrameCompStyles';
import imgSrc1 from '../../../../../assets/img/product-Wilier110NDR_106.png';
import imgSrc2 from '../../../../../assets/img/product-Wilier110NDR_120.png';

const TextGroup = ({ className, children }) => (
  <Text className={className}>{children}</Text>
);

const TextGroupStyled = styled(TextGroup)`
  border: 1px solid blue;
  user-select: none;
  @media all and (min-width: 480px) { grid-area: 1 / 1 / 2 / -1; width: 80%; line-height: 24px; }
  @media all and (min-width: 768px) { grid-area: 1 / 1 / 2 / -1; width: 80%; line-height: 24px; }
  @media all and (min-width: 1024px) { grid-area: 1 / 1 / 2 / 2; width: 80%; line-height: 24px; }
  @media all and (min-width: 1280px) {  width: 80%; line-height: 24px; }
  @media all and (min-width: 1440px) { width: 70%; line-height: 24px; }
`

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
