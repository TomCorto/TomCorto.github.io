import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Container, BikeProductContainer, BikeDisplayContainer } from './BikeMainCompStyle';
import BikeProductThumbComp from './components/BikeProductThumb/BikeProductThumbComp';
import BikeSelectorComp from './components/Selector/BikeSelectorComp';
import BikeTextComp from './components/TextComp/BikeTextComp';
import FilterComp from './components/Filter/FilterComp';


@inject('BikeStore')
@observer
export default class BikeMainComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animStatus: false
    }
    this.toggleAnimationProduct = this.toggleAnimationProduct.bind(this);
  }

  toggleAnimationProduct() {
    const { toggleAnimProductFunc, uiProductAnim } = this.props.BikeStore;
    toggleAnimProductFunc();
    /*alert(uiProductAnim);*/
    // <button onClick={this.toggleAnimationProduct}>Launch Animation</button>
  }

  render() {
    const { ProductList, uiProductAnim, bikesPresentationText, filterProductList } = this.props.BikeStore;
    return (
      <Container>
        <BikeTextComp textProps={bikesPresentationText} />
        <FilterComp />
        <BikeDisplayContainer>
          <BikeSelectorComp />
          <BikeProductContainer>
            {ProductList.map((el, index) => <BikeProductThumbComp key={index} propsObject={el} onMouseEnter={uiProductAnim} />)}
          </BikeProductContainer>
        </BikeDisplayContainer>
      </Container>
    )
  }
}
/* {ProductList.filter((el) => el !== "Route Performance" ).map((el, index) => <BikeProductThumbComp key={index} propsObject={el} onMouseEnter={uiProductAnim} />)}*/
