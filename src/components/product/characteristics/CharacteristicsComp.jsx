import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Container, TableGroup, ItemsGroup, ImgItems, SpecsItems, HeaderRedStyled, SpecsTitle, SpecsSub, SpecsGroup, SpecsSpan } from './CharacteristicsCompStyles';
import imgSrc from '../../../assets/icons/icons-product-frame.png';
import SpecsItemsComp from './components/SpecsItemsComp';


@inject('ProductStore')
@observer
export default class CharacteristicsComp extends Component {

  render() {
    const { characteristicsObject, characteristicsItemsObject1, characteristicsItemsObject2, characteristicsItemsObject3 } = this.props.ProductStore;
    return (
      <Container>
        <HeaderRedStyled>{characteristicsObject.title}</HeaderRedStyled>
        <TableGroup>
          <ItemsGroup>
            {characteristicsItemsObject1.map((el, index) =>
              <SpecsItemsComp key={index} propsObject={el} />
            )}
          </ItemsGroup>

          <ItemsGroup>
            {characteristicsItemsObject2.map((el, index) =>
              <SpecsItemsComp key={index} propsObject={el} />
            )}
          </ItemsGroup>
          <ItemsGroup>
            {characteristicsItemsObject3.map((el, index) =>
              <SpecsItemsComp key={index} propsObject={el} />
            )}
          </ItemsGroup>
        </TableGroup>
      </Container>
    )
  }
}
