import React, { Component } from 'react';
import SearchDesktopComp from './components/SearchDesktopComp';
import Transition from 'react-transition-group/Transition';

export default class SearchDesktop extends Component {
  constructor(){
    super();
    this.state = { msg: 'SearchDesktop' }
  }

  render() {
    const divStyle = {
      margin: 0,
    }
    return (
    <Transition timeout={500}>
    {(status) => (
    <SearchDesktopComp style={divStyle}></SearchDesktopComp>
    )}
    </Transition>
  )}
}
