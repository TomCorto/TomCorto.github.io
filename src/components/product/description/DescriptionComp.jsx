import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, Title, Text } from "./DescriptionCompStyles";

@inject('ProductStore', 'ProductUI')
@observer
export default class DescriptionComp extends Component {
  render() {
    const { descriptionObject } = this.props.ProductStore;
    const { ProductAnimation } = this.props.ProductUI;
    return (
      <Container>
        <Title in={ProductAnimation.toggleImgProduct}>{descriptionObject.title}</Title>
        <Text in={ProductAnimation.toggleImgProduct}>{descriptionObject.text}</Text>
      </Container>
    )
  }
}
