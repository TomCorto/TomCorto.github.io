import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import BarComp from '../components/product/navigation/BarComp';
import ProductComp from '../components/product/product/ProductComp';
import InfoBarComp from '../components/product/infobar/InfoBarComp';
import DescriptionComp from '../components/product/description/DescriptionComp';
import SliderImgComp from '../components/product/slider/SliderImgComp';
import VisualComp from '../components/product/visualsproduct/VisualComp';
import CharacteristicsComp from '../components/product/characteristics/CharacteristicsComp';
import FrameComp from '../components/product/frame/FrameComp';
import SizeComp from '../components/product/size/SizeComp';

const Container = styled.section`
  overflow: hidden;
  top: 0;
  margin: 0;
  padding: 0;
  border: 1px solid red;
`

@inject('NavigationStore')
@observer
export default class ProductPage extends Component {
  constructor() {
    super();
    this.state = {
      msg: 'Product Page',
      offsetValue: 0,
      countLaunch: 0
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);

  }

  handleScroll() {
    const { toggleMenuScroll } = this.props.NavigationStore;
    this.setState({ offsetValue: window.pageYOffset });
    if (this.state.offsetValue >= 179 && this.state.countLaunch == 0) {
      this.setState({ toggleLaunch: !this.state.toggleLaunch });
      toggleMenuScroll();
      this.setState({ countLaunch: this.state.countLaunch + 1 });
    }else if (this.state.offsetValue <= 180 && this.state.countLaunch >= 1){
      toggleMenuScroll();
      this.setState({ toggleLaunch: !this.state.toggleLaunch });
      this.setState({ countLaunch: this.state.countLaunch - 1 });
    }
  }
  render() {
    return(
      <Container onScroll={this.handleScroll} >
        <BarComp />
        <ProductComp />
        <InfoBarComp />
        <DescriptionComp />
        <SliderImgComp />
        <VisualComp />
        <CharacteristicsComp />
        <FrameComp />
        <SizeComp />
      </Container>
    )
  }
}
