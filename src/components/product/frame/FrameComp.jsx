import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, TextCompStyled } from './FrameCompStyles';
import { HeaderRed } from '../visualsproduct/components/frame/FrameCompStyles';

@inject('ProductStore')
@observer
export default class FrameComp extends Component {

  render() {
    const { geometryObject } = this.props.ProductStore;
    return (
      <Container>
        <HeaderRed>{geometryObject.title}</HeaderRed>
        <TextCompStyled>{geometryObject.text}</TextCompStyled>
      </Container>
    )
  }
}
