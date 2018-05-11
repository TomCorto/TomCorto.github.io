import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import logoSearch from '../../../assets/icons/icons-search-dark-lg.png';
import { Container, SearchIconStyled, SearchLabelStyled, SearchInputStyled, ButtonStyled } from './SearchDesktopCompStyles';

@inject('NavigationStore')
@observer
export default class SearchDesktopComp extends Component {
  render() {
    const { SearchToggle } = this.props.NavigationStore;
    return (
      <Container unmountOnExit in={SearchToggle}>
        <SearchLabelStyled>
          <SearchIconStyled src={logoSearch} alt={"Search"} />
          <SearchInputStyled placeholder={"Chercher des articles, VTT, Maillot…"} autoFocus type="text" />
          <ButtonStyled>Rechercher</ButtonStyled>
        </SearchLabelStyled>
      </Container>
    );
  }
}
