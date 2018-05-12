import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, Text } from "./DescriptionCompStyles";

@inject('ProductStore')
@observer
export default class DescriptionComp extends Component {
  render() {
    const { descriptionObject } = this.props.ProductStore;
    return (
      <Container>
        <Text>{descriptionObject.text}</Text>
      </Container>
    )
  }
}
