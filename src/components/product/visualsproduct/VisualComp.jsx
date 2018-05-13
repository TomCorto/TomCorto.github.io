import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import FrameComp from './components/frame/FrameComp';
import { Container } from './VisualCompStyles';

@inject('ProductStore')
@observer
export default class VisualComp extends Component {

  render() {
    return (
      <Container>
        <FrameComp />
      </Container>
    )
  }
}
