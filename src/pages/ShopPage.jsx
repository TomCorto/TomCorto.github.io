import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import MapComp from '../components/shop/map/MapComp';
import HeaderMapComp from '../components/shop/header/HeaderMapComp';
import SearchComp from '../components/shop/search/SearchComp';
import StoresListComp from '../components/shop/storeList/StoresListComp';

const Container = styled.main`
  //min-width: 100%;
  /*display: flex;
  justify-content: row nowrap;
  align-items: flex-start;*/
  //padding: 0 20px 0 20px;
`
@inject('ShopStore')
@observer
export default class ShopPage extends Component {

  render() {
    const { StoresListObject } = this.props.ShopStore;
    return(
      <Container>
        <HeaderMapComp textProps={'Trouver un revendeur'} />
        <MapComp />
        <SearchComp />
        <StoresListComp objectProps={StoresListObject} />
      </Container>
    )
  }
}
