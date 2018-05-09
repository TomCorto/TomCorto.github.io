import styled from 'styled-components';
import transition from 'styled-transition-group';

export const Container = styled.div`
  width: auto;
  height: auto;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid black;
`

export const TitleProduct = styled.h5`
  margin: 0;
  padding: 0;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  @media all and (min-width: 480px) { font-size: 1rem; }
  @media all and (min-width: 768px) { font-size: 1.1rem; }
  @media all and (min-width: 1024px) { font-size: 1.2rem; }
  @media all and (min-width: 1280px) { font-size: 1.3rem; }
`

export const ImgContainer = styled.div`
  margin: 0;
  padding: 0;
  height: auto;
  width: auto;
  border: 1px solid black;
  /*
  &:enter { transform: scale(1); }
  &:enter-active {
    transform: scale(0.8);
    transition: transform 150ms ease-in;
  }
  &:exit { transform: scale(0.8); }
  &:exit-active {
    transform: scale(1);
    transition: transform 150ms ease-in;
  }*/
`

export const ImgProduct = styled.img`
  margin: 0;
  padding: 0;
  height: auto;
  max-width: 100%;
`

const H6 = TitleProduct.withComponent('h6')
export const PriceProduct = H6.extend`
  font-weight: var(--ft-weight-lt);
  @media all and (min-width: 480px) { font-size: 0.8rem; }
  @media all and (min-width: 768px) { font-size: 0.9rem; }
  @media all and (min-width: 1024px) { font-size: 1rem; }
  @media all and (min-width: 1280px) { font-size: 1.1rem; }
`

export const ColorGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`

export const ColorItem = styled.div`
  height: 1.2em;
  width: 1.2em;
  margin: 0 0.2em 0;
  border-radius: 100px;
  background-color: ${props => props.backgroundColor};
`
