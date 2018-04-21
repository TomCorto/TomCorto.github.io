import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import imgTest from './assets/img/landing-bike.jpg';
import './App.css';

const DivStyled = styled.div`
  color: red;
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DivStyled>
            Hello
          </DivStyled>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <img src={imgTest} alt=""/>
      </div>
    );
  }
}

export default App;
