import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, ImgFrame, ImgGrid, TableGrid, ButtonGrid } from './SizeCompStyles'
import TableComp from './components/table/TableComp';
import ButtonComp from './components/button/ButtonComp';


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
    //alert(sizeComponent.geometryObject[1]);
    return (
    <Container>
      <ImgGrid>
        <ImgFrame src={images[sizeComponent.imgObject.imgSrc]} alt={sizeComponent.imgObject.imgAlt} />
      </ImgGrid>
      <TableGrid>
        <TableComp arrayObject={sizeComponent.geometryObject} headerProps={sizeComponent.headerTitle}/>
      </TableGrid>
      <ButtonGrid>
        <ButtonComp propsText={sizeComponent.buttonText} onClick={this.displaySize} />
      </ButtonGrid>
    </Container>
    )
  }
}
