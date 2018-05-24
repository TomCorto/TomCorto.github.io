import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { Container, ImgMainStyled, CustomizeCTA, ImgCustomStyled, ButtonCTA, ButtonCTAStores, IconsCTA, IconsLocation, ButtonGroup } from './ProductCompStyles';
import iconCustom from '../../../assets/icons/product-icons-customize.png';
import iconCheckout from '../../../assets/icons/icon-shopping-cart-light-lg.png';
import iconStores from '../../../assets/icons/icons-location.png';
import CustomizeComp from '../customize/CustomizeComp';


@inject('ProductStore')
@observer
export default class ProductComp extends Component {
  constructor() {
    super();
    this.importAll = this.importAll.bind(this);
    this.toggleAction = this.toggleAction.bind(this);
  }

  toggleAction() {
    alert("Checkout !");
  }

  importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
  }

  render() {
    const { productObject } = this.props.ProductStore;
    const images = this.importAll(require.context('../../../assets/img/', false, /\.(png|jpe?g|svg)$/));
    const icons = this.importAll(require.context('../../../assets/icons/', false, /\.(png|jpe?g|svg)$/));

    return(
      <Container>
        <ImgMainStyled src={images[productObject.imgMain.imgSrc]} alt={productObject.imgMain.imgAlt} />
        <ButtonGroup>
            <CustomizeCTA onClick={this.toggleAction} type="button"><ImgCustomStyled src={iconCustom} alt={"Icons Customize"}/>{productObject.buttonCustomText}</CustomizeCTA>
            <ButtonCTAStores onClick={this.toggleAction} ><IconsLocation src={iconStores} alt={"Icons Stores Locator"}/>{productObject.buttonCTAStoreText}</ButtonCTAStores>
            <ButtonCTA onClick={this.toggleAction} ><IconsCTA src={iconCheckout} alt={"Icons Checkout"}/>{productObject.buttonCTAText}</ButtonCTA>
        </ButtonGroup>
      </Container>
    )
  }
}
