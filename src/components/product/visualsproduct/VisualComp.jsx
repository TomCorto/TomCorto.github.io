import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Container } from './VisualCompStyles';
import FrameComp from './components/frame/FrameComp';
import SpecificitiesComp from './components/specs/SpecificitiesComp';

@inject('ProductStore')
@observer
export default class VisualComp extends Component {

  render() {
    return (
      <Container>
        <FrameComp />
        <SpecificitiesComp />
      </Container>
    )
  }
}
