import React, { Component } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import logoSearch from '../../../assets/icons/icons-search-dark-lg.png';
import { DivContainerStyled, SearchIconStyled, SearchLabelStyled, SearchInputStyled, ButtonStyled } from './SearchDesktopCompStyles';

@inject('NavigationStore')
@observer
export default class SearchDesktopComp extends Component {
  render() {
    const { SearchToggle } = this.props.NavigationStore;
    return (
      <DivContainerStyled unmountOnExit in={SearchToggle}>
        <SearchLabelStyled>
          <SearchIconStyled src={logoSearch} alt={"Search"} />
          <SearchInputStyled placeholder={"Chercher des articles, VTT, Maillot…"} autoFocus type="text" />
          <ButtonStyled>Rechercher</ButtonStyled>
        </SearchLabelStyled>
      </DivContainerStyled>
    );
  }
}

/*
const SearchDesktopComp = ({msg, nameInput}) => (
  <DivContainerStyled>
    <SearchLabelStyled>
      <SearchIconStyled src={logoSearch} alt={"Search"} />
      <SearchInputStyled placeholder={"Chercher des articles, VTT, Maillot…"}  ref={(input) => { this.nameInput = input; }}  />
      <ButtonStyled>Rechercher</ButtonStyled>
    </SearchLabelStyled>
  </DivContainerStyled>
);*/


//export default SearchDesktopComp;
