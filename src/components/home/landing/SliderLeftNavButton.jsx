import React, { Component } from 'react';
import styled from 'styled-components';
import './SliderCustomStyle.css';
import leftArrow from '../../../assets/icons/icons-slider-arrows-left.png';

const customStyle = {
  zIndex: '100',
  position: 'absolute',
  width: '3vh',
  height: '3vh',
  left: '2vw',
  top: 372,
  background: 'transparent',
  cursor: 'pointer'
}

class SliderLeftNavButton extends React.Component {
  render() {
    const { top, currentSlide, slideCount, ...rest } = this.props
    return <img className="" src={leftArrow} alt=""  onClick={this.props.onClick} style={customStyle}/>;
  }
}

export default SliderLeftNavButton;

//<styledButton onClick={this.props.onClick} style={{zIndex: 100, position: 'absolute', width: '3vh', height: '3vh', left: '2vw', top: 300, background: 'grey'}}>Next</styledButton>
