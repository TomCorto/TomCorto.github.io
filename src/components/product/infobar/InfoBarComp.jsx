import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, ProductPriceComp, ModelStyled, PriceStyled, SizeGroup, LabelSize, SelectSize, InfoGroupStyled, InfoTextStyled } from './InfoBarCompStyles';

@inject('ProductStore')
@observer
export default class InfoBarComp extends Component {
  constructor() {
    super();
  }
  render() {
    const  { infoBarObject } = this.props.ProductStore;
    return (
      <Container>
        <ProductPriceComp>
          <ModelStyled>{infoBarObject.modelText}</ModelStyled>
          <PriceStyled>{infoBarObject.priceText}</PriceStyled>
        </ProductPriceComp>
        <SizeGroup>
          <LabelSize>{infoBarObject.sizeLabel}</LabelSize>
          <SelectSize>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option selected value="m">M</option>
            <option value="lg">L</option>
            <option value="xl">XL</option>
          </SelectSize>
        </SizeGroup>
        <InfoGroupStyled>
          <InfoTextStyled>{infoBarObject.sizeText}</InfoTextStyled>
          <InfoTextStyled>{infoBarObject.compareText}</InfoTextStyled>
        </InfoGroupStyled>
      </Container>
    )
  }
}
