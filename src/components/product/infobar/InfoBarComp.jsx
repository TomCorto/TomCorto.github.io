import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, ProductPriceComp, ModelStyled, PriceStyled, SizeGroup, LabelSize, SelectSize, InfoGroupStyled, InfoTextStyled, ColorsGroup, ColorsLabels, ColorsOvalGroup, ColorsOvalImg, ColorsLabel } from './InfoBarCompStyles';
import colorsIcons1 from '../../../assets/icons/colors-blue-red.png';
import colorsIcons2 from '../../../assets/icons/colors-red-red.png';
import colorsIcons3 from '../../../assets/icons/colors-black-black.png';

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
        <ColorsGroup>
          <ColorsLabels>Coloris</ColorsLabels>
          <ColorsOvalGroup>
            <ColorsOvalImg src={colorsIcons1} alt={"Icons"} />
            <ColorsOvalImg src={colorsIcons2} alt={"Icons"} />
            <ColorsOvalImg src={colorsIcons3} alt={"Icons"} />
          </ColorsOvalGroup>
          <ColorsLabel>Red Matt & Glossy</ColorsLabel>
        </ColorsGroup>
        <InfoGroupStyled>
          <InfoTextStyled>{infoBarObject.sizeText}</InfoTextStyled>
          <InfoTextStyled>{infoBarObject.compareText}</InfoTextStyled>
        </InfoGroupStyled>
      </Container>
    )
  }
}
