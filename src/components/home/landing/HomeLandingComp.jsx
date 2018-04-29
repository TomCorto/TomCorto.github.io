import React from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import imgLanding from '../../../assets/img/landing-bike.jpg';
import imgLanding2 from '../../../assets/img/landing_slide-2.png';
import imgLanding3 from '../../../assets/img/landing_slide-3.png';
import SliderRightNavButton from "./SliderRightNavButton";
import SliderLeftNavButton from './SliderLeftNavButton';
import PrimaryButton from '../../../commons/buttons/PrimaryButton';

const LandingStyled = styled.div`
  background-color: blue;
  background: url(${props => props.imgSrc}) center center no-repeat;
  background-size: cover;
  @media all and (max-width: 480px) { height: 22em; }
  @media all and (min-width: 480px) { height: 22.6em; }
  @media all and (min-width: 768px) { height: 28.4em; }
  @media all and (min-width: 1024px) { height: 41.1em; }
  @media all and (min-width: 1366px) { height: 50em; }
`

const H3styled = styled.h3`
  color: var(--color-primary-red);
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  margin: 0;
  text-align: center;
  width: 100%;
  position: center;
  @media all and (max-width: 480px) { font-size: 2rem; }
  @media all and (min-width: 480px) { font-size: 2rem; }
  @media all and (min-width: 768px) { font-size: 2.75rem; }
  @media all and (min-width: 1024px) { font-size: 2rem; }
`

const H4extended = H3styled.withComponent('h4');
const H4styled = H4extended.extend`
  color: var(--color-primary-white);
  font-family: var(--ft-source-pro);
  font-weight: 400;
  margin: 0;
  text-align: center;
  width: 100%;
  @media all and (max-width: 480px) { font-size: 1.5rem; margin: 0.5em 0 1em 0; }
  @media all and (min-width: 480px) { font-size: 1.5rem; margin: 0.5em 0 1em 0; }
  @media all and (min-width: 768px) { font-size: 1.5rem; margin: 0.5em 0 1em 0; }
  @media all and (min-width: 1024px) { font-size: 1.25rem; margin: 0.5em 0 3em 0; }
  @media all and (min-width: 1280px) { font-size: 1.25rem; margin: 0.5em 0 3.5em 0; }
`

const ButtonType = ({textProps, className}) => (
  <PrimaryButton className={className} bgcolorProps={"rgba(4,13,69, 0.7)"} propsBackgroundHover={"rgba(4,13,69, 1)"} textProps={"En savoir plus"} propsArrowBool={true} />
);
const ButtonStyled = styled(ButtonType)`
  @media (min-width: 1024px) { margin-top: 0vw; }
  @media (min-width: 1280px) { margin-top: 0vw; }
`;



const TextGroupStyled = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media all and (max-width: 480px) { margin: 15% 0 0 8vw; }
  @media all and (min-width: 480px) { margin: 15% 0 0 8vw; }
  @media all and (min-width: 768px) { margin: 15% 0 0 8vw; }
  @media all and (min-width: 1024px) { margin: 20% 0 0 4vw; width: 30em; }
  @media all and (min-width: 1280px) { margin: 20% 0 0 10vw; width: 30em; }
  @media all and (min-width: 1366px) { margin: 15% 0 0 10vw; width: 30em; }
`

const ButtonTestStyled = styled.button`
  @media all and (min-width: 76) { margin-top: 15em; }
  @media all and (min-width: 1024px) { margin-top: 15em; }
`

const TextGroupComp = ({h3Props, h4Props}) => (
  <TextGroupStyled>
    <H3styled>{h3Props}</H3styled>
    <H4styled>{h4Props}</H4styled>
    <ButtonStyled bgcolorProps={"rgba(4,13,69, 0.7)"} textProps="En savoir plus" />
  </TextGroupStyled>
);

@inject('HomeStore')
@observer
class HomeLandingComp extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: true,
      accessibility: true,
      nextArrow: <SliderRightNavButton />,
      prevArrow: <SliderLeftNavButton />
    };
    return (
      <Slider {...settings}>
        <LandingStyled imgSrc={imgLanding}>
          <TextGroupComp h3Props={"Collection vélos 2018"} h4Props={"Découvrez la nouvelle gamme"} />
        </LandingStyled>
        <LandingStyled imgSrc={imgLanding2}>
          <TextGroupComp h3Props={"Transmission SRAM XX"} h4Props={"Découvrez le haut de gamme de SRAM"} />
        </LandingStyled>
        <LandingStyled imgSrc={imgLanding3}>
          <TextGroupComp h3Props={"Gammes de vélos à freins à disque"} h4Props={"Découvrez nos vélos équipés de freins à disque"} />
        </LandingStyled>
      </Slider>
    );
  }
}

export default HomeLandingComp;
