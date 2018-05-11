import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, BikeProductContainer, BikeDisplayContainer } from './BikeMainCompStyle';
import BikeProductThumbComp from './components/BikeProductThumb/BikeProductThumbComp';
import BikeSelectorComp from './components/Selector/BikeSelectorComp';
import BikeTextComp from './components/TextComp/BikeTextComp';
import FilterComp from './components/Filter/FilterComp';
import BikeSelectorMobileComp from './components/Selector/SelectorMobileTablets/BikeSelectorMobileComp';


@inject('BikeStore')
@observer
export default class BikeMainComp extends Component {
  constructor(props) {
    super(props);
    this.toggleAnimationProduct = this.toggleAnimationProduct.bind(this);
  }

  toggleAnimationProduct() {
    const { toggleAnimProductFunc } = this.props.BikeStore;
    toggleAnimProductFunc();
  }

  render() {
    const { ProductList, uiProductAnim, bikesPresentationText } = this.props.BikeStore;
    return (
      <Container>
        <BikeTextComp textProps={bikesPresentationText} />
        <FilterComp />
        <BikeSelectorMobileComp />
        <BikeDisplayContainer>
          <BikeSelectorComp />
          <BikeProductContainer>
            {ProductList.map((el, index) => <BikeProductThumbComp key={index} propsObject={el} onMouseEnter={uiProductAnim} /> )}
          </BikeProductContainer>
        </BikeDisplayContainer>
      </Container>
    )
  }
}
