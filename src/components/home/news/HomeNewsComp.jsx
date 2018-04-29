import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import NewsComp from './components/NewsComp';

const ContainerStyled = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 16px;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: auto;
  margin: 0;
  padding: 0;
  padding: 1vw 2em 1vw;
  overflow: hidden;
  @media (max-width: 1024px) { display: none; }
  @media (min-width: 1024px) { display: display: grid; }
`

@inject('HomeStore')
@observer
export default class HomeNewsComp extends Component {
  render() {
    const { LandingNews } = this.props.HomeStore;
    return (
      <ContainerStyled>
        {LandingNews.map((el, index) => <NewsComp key={index} propsObject={el} />)}
      </ContainerStyled>
    )
  }
}
