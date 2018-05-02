import styled from 'styled-components';
import transition from 'styled-transition-group';
import imgSrc from '../../../assets/img/bikes-landing.jpg';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  justify-items: center;
  align-items: center;
  background: url(${imgSrc}) center center no-repeat;
  background-size: cover;
  font-style: var(--ft-source-pro);
  color: var(--color-primary-white);
  user-select: none;
  @media all and (max-width: 768px) {
    height: 50vh;
  }
  @media all and (min-width: 768px) {
    height: 50vh;
  }
  @media all and (min-width: 1024px) {
    height: 70vh;
    grid-column-gap: 2vw;
  }
`

export const H2Styled = styled.h2`
  grid-area: 1 / 1 / 1 / -1;
  align-self: end;
  justify-self: center;
  font-weight: var(--ft-weight-semi);
  @media all and (max-width: 480px) { font-size: 4rem; }
  @media all and (min-width: 480px) { font-size: 4.5rem; }
  @media all and (min-width: 768px) { font-size: 5rem; }
  @media all and (min-width: 1024px) { font-size: 4rem; }
  @media all and (min-width: 1280) { font-size: 3rem; }
`

export const ButtonBikeLink = styled.button`
  grid-area: 2 / 1 / -1 / 2;
  align-self: start;
  justify-self: end;
  cursor: pointer;
  font-weight: var(--ft-weight-reg);
  border-radius: 2px;
  border: 1px solid var(--color-primary-white);
  background: transparent;
  color: var(--color-primary-white);
  @media all and (max-width: 1024px) {
    display: none;
  }
  @media all and (min-width: 1024px) {
    padding: 0.5vw 1vw 0.5vw;
    font-size: 1rem;
  }
`

export const ButtonBikeFinder = ButtonBikeLink.extend`
  grid-area: 2 / 2 / -1 / 3;
  align-self: start;
  justify-self: start;
  background-color: var(--color-primary-white);
  color: var(--color-primary-grey);
`
