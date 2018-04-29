import React, { Component } from 'react';
import styled from 'styled-components';
import  './SliderCustomStyle.css';
import leftArrow from '../../../assets/icons/icons-slider-arrows-left.png';

const customStyle = {
  zIndex: '100',
  position: 'absolute',
  width: '3vh',
  height: '3vh',
  right: '2vw',
  top: 372,
  background: 'transparent',
  cursor: 'pointer',
  transform: 'rotate(180deg)'
}

const StyledRightArrow = styled.img`
  //top: 372;
`

class SliderRightNavButton extends React.Component {
  render() {
    const { top, currentSlide, slideCount, ...rest } = this.props
    return <StyledRightArrow src={leftArrow} alt=""  onClick={this.props.onClick} style={customStyle} className="customStyleRight" />;
  }
}

export default SliderRightNavButton;
