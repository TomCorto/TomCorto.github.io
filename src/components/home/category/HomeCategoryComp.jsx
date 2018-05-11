import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import CategoryComp from './components/CategoryComp';

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) { margin: 2vh 0 2vh; grid-template-columns: repeat(1, 1fr); grid-template-rows: repeat(4, auto); }
  @media (min-width: 768px) { margin: 2vh 0 5vh; grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(2, auto); grid-row-gap: 2vh; }
  @media (min-width: 1024px) { margin: 2vh 0 2vh; grid-template-columns: repeat(4, 1fr); grid-template-rows: auto; }
`

@inject('HomeStore')
@observer
export default class HomeCategoryComp extends Component {

  render() {
    const { LandingCategory } = this.props.HomeStore;
    return (
      <Container>
        {LandingCategory.map((el, index) => (<CategoryComp key={index} objectProps={el}/>))}
      </Container>
    )
  }
}
