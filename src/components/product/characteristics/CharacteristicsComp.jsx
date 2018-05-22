import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Container, TableGroupDesktop, TableGroupTablet, TableGroupMobile, ItemsGroup, ImgItems, SpecsItems, HeaderRedStyled, SpecsTitle, SpecsSub, SpecsGroup, SpecsSpan } from './CharacteristicsCompStyles';
import SpecsItemsComp from './components/SpecsItemsComp/SpecsItemsComp';


@inject('ProductStore')
@observer
export default class CharacteristicsComp extends Component {

  render() {
    const { characteristicsObject, characteristicsItemsObject } = this.props.ProductStore;
    return (
      <Container>
        <HeaderRedStyled>{characteristicsObject.title}</HeaderRedStyled>{/* Utiliser slice */}
        <TableGroupDesktop>
          <ItemsGroup>
            {characteristicsItemsObject.slice(0, 5).map((el, index) =>
              <SpecsItemsComp key={index} propsObject={el} />
            )}
          </ItemsGroup>
          <ItemsGroup>
            {characteristicsItemsObject.slice(6, 11).map((el, index) =>
              <SpecsItemsComp key={index} propsObject={el} />
            )}
          </ItemsGroup>
          <ItemsGroup>
            {characteristicsItemsObject.slice(7, -1).map((el, index) =>
              <SpecsItemsComp key={index} propsObject={el} />
            )}
          </ItemsGroup>
        </TableGroupDesktop>
        <TableGroupTablet>
          <ItemsGroup>
            {characteristicsItemsObject.slice(0, 6).map((el, index) =>
              <SpecsItemsComp key={index} propsObject={el} />
            )}
          </ItemsGroup>
          <ItemsGroup>
            {characteristicsItemsObject.slice(6, -1).map((el, index) =>
              <SpecsItemsComp key={index} propsObject={el} />
            )}
          </ItemsGroup>
        </TableGroupTablet>

        <TableGroupMobile>
          <ItemsGroup>
            {characteristicsItemsObject.slice(0, -1).map((el, index) =>
              <SpecsItemsComp key={index} propsObject={el} />
            )}
          </ItemsGroup>
        </TableGroupMobile>
      </Container>
    )
  }
}
