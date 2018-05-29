import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, SearchGroup, SearchTitle, SearchInputGroup, SearchInput, SearchButton, ImgIcons, LocateButton } from './SearchCompStyles';
import imgLogo from '../../../assets/icons/icons-search.png';

export default class SearchComp extends Component {

    render() {
        return (
            <Container>
                <SearchTitle>Rechercher</SearchTitle>
                <SearchGroup>
                    <SearchInputGroup>
                        <SearchInput />
                        <SearchButton type='button'>Rechercher</SearchButton>
                    </SearchInputGroup>
                    <LocateButton type="button">
                      <ImgIcons src={imgLogo} alt="" />
                        Localiser un magasin à proximité
                    </LocateButton>
                </SearchGroup>
            </Container>
        );
    }
};
