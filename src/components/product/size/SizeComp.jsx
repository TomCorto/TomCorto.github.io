import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, ImgFrame, ImgGrid, TableGrid, ButtonGrid } from './SizeCompStyles'
import TableComp from './components/table/TableComp';
import ButtonComp from './components/button/ButtonComp';
import SizeFinderComp from './components/findersize/SizeFinderComp';

import { Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


function importAll(r) { // @importAll Dynamic Import image
let images = {};
r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
return images;
}

@inject('ProductStore')
@observer
export default class SizeComp extends Component {
  constructor() {
    super();
    this.displaySize = this.displaySize.bind(this);
  }

  displaySize() {
    const { displayProductSize } = this.props.ProductStore;
    displayProductSize();
  }

  render() {
    const images = importAll(require.context('../../../assets/img/', false, /\.(png|jpe?g|svg)$/));
    const { sizeComponent } = this.props.ProductStore;

		return <Element name="DimensionElement">
       <Container>
        <ImgGrid>
          <ImgFrame src={images[sizeComponent.imgObject.imgSrc]} alt={sizeComponent.imgObject.imgAlt} />
        </ImgGrid>
        <TableGrid>
          <TableComp arrayObject={sizeComponent.geometryObject} headerProps={sizeComponent.headerTitle} />
        </TableGrid>
        <ButtonGrid>
          <ButtonComp animLaunch={sizeComponent.displaySize} onClick={this.displaySize} colorProps={true} propsText={"Trouve ta taille"} />
          <SizeFinderComp />
        </ButtonGrid>
      </Container>
    </Element>;
  }
}
// displaySizeColorsBackground
//{sizeComponent.displaySize ? null : <ButtonComp unmountOnExit in={sizeComponent.displaySize} timeout={2000} onClick={this.displaySize} colorProps={true} /> }


/*
 <ButtonComp animLaunch={sizeComponent.displaySize} onClick={this.displaySize} colorProps={true} propsText={"Trouve ta taille"} />
          <SizeFinderComp />
*/
