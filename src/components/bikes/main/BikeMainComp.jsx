import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, BikeProductContainer, BikeDisplayContainer } from './BikeMainCompStyle';
import BikeProductThumbComp from './components/BikeProductThumb/BikeProductThumbComp';
import BikeSelectorComp from './components/Selector/BikeSelectorComp';
import BikeTextComp from './components/TextComp/BikeTextComp';
import FilterComp from './components/Filter/FilterComp';
import BikeSelectorMobileComp from './components/Selector/SelectorMobileTablets/BikeSelectorMobileComp';


@inject('BikeStore', 'UiStore', 'NavigationStore')
@observer
export default class BikeMainComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countLaunch: 0,
      offsetValue: 0,
      toggleLaunch: false
    }
    this.toggleAnimationProduct = this.toggleAnimationProduct.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { toggleMenuScroll, ScrollListener } = this.props.NavigationStore;

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

  toggleAnimationProduct() {
    const { toggleAnimProductFunc } = this.props.BikeStore;
    toggleAnimProductFunc();
  }


  render() {
    const { ProductList, uiProductAnim, bikesPresentationText } = this.props.BikeStore;
    return (
      <Container onScroll={this.handleScroll}>
        <BikeTextComp textProps={bikesPresentationText} />
        <FilterComp />
        <BikeSelectorMobileComp />
        <BikeDisplayContainer>
          <BikeSelectorComp />
          <BikeProductContainer>
            {ProductList.map((el, index) => <BikeProductThumbComp key={index} propsObject={el} onMouseEnter={uiProductAnim} /> )}
          </BikeProductContainer>
        </BikeDisplayContainer>
      </Container>
    )
  }
}
