import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Container, FilterTitle, TitleContainer, ContainerDropdown, MenuContainer, MenuItemsContainer, MenuTitle, MenuIcons, MenuHR, SubmitSearch } from './BikeSelectorMobileCompStyles';
import closedIcon from '../../../../../../assets/icons/icons-menu-mobile-filter.png';
import FontAwesome from 'react-fontawesome';

@inject('BikeStore')
@observer
export default class BikeSelectorMobileComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: true
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({openMenu: !this.state.openMenu});
  }

  render() {
    const { filterUiRoad } = this.props.BikeStore;
    const lenFilterUiRoad = filterUiRoad.length;
    return (
      <Container onClick={this.toggleMenu}>
        <TitleContainer>
          <FontAwesome
            className='super-crazy-colors'
            name='list'
            size='sm'
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
          />
          <FilterTitle>Filtrer</FilterTitle>
        </TitleContainer>

          <ContainerDropdown in={this.state.openMenu}>
            {filterUiRoad.map((el, index) =>
              <MenuContainer>
                <MenuItemsContainer>
                  <MenuTitle key={index}>{el.title}</MenuTitle>
                  <MenuIcons src={closedIcon} alt={"Not working"}/>
                </MenuItemsContainer>
                {lenFilterUiRoad === index + 1 ? null : <MenuHR/> }
              </MenuContainer>
            )}
            <SubmitSearch type="button">Rechercher</SubmitSearch>
          </ContainerDropdown>

      </Container>
    )
  }
}
