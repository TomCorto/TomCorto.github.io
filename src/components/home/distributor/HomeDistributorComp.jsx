import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import imgSrcTablets from '../../../assets/img/landing-map-background_tablets.png';
import imgSrcDesktop from '../../../assets/img/landing-map-background-group.png';
import iconSrc from '../../../assets/icons/icons-location-point.png';
import DistributorButton from './DistributorButton';


const Container = styled.div`
  height: 320px;
  overflow: hidden;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  @media all and (max-width: 1024px) { margin: 3em 0 3em 0; background: url(${imgSrcTablets}) no-repeat center center; background-size: cover; }
  @media all and (min-width: 1024px) { margin: 3em 0 3em 0; background: url(${imgSrcDesktop}) no-repeat center center; background-size: cover; }
`

const IconStyled = styled.img`
  @media all and (min-width: 0) and (max-width: 480px ) { }
  @media all and (min-width: 480px) and (max-width: 768px ) { }
  @media all and (min-width: 768px) and (max-width: 1024px ) { }
  @media all and (min-width: 1024px) { display: none; }
`

const H3Styled = styled.h3`
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  color: var(--color-primary-white);
  margin: 0;
  padding: 0;
  @media all and (min-width: 0px) and (max-width: 768px) { display: block; font-size: 2.75rem; }
  @media all and (min-width: 768px) { display: block; font-size: 3.125rem; }
  @media all and (min-width: 1024px) { display: none; }
`
@inject('HomeStore')
@observer
export default class HomeDistributorComp extends Component {
  render() {
    const { LandingLocator } = this.props.HomeStore;
    return (
      <Container>
        <IconStyled src={iconSrc} alt={"no working"}/>
        <H3Styled>{LandingLocator}</H3Styled>
        <DistributorButton linkProps={"/distributor"} textProps={LandingLocator} />
      </Container>
    )
  }
}
