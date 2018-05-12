import styled from 'styled-components';
import imgSrc1 from '../../../assets/img/product-Wilier110NDR_100.jpg';
import imgSrc2 from '../../../assets/img/product-Wilier110NDR_124.jpg';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, auto);
  height: auto;
  @media all and (max-width: 1024px) { grid-column-gap: 8px; }
  @media all and (min-width: 1024px) { grid-column-gap: 12px; }
  @media all and (min-width: 1366px) { grid-column-gap: 14px; }
  @media all and (min-width: 1440px) { grid-column-gap: 16px; }
`

export const ImgStyled = styled.img`
  width: 100%;
  background-image: url(${imgSrc1});
  background-repeat: no-repeat;
  background-size: contain;
  @media all and (max-width: 1024px) { max-height: 244px; }
  @media all and (min-width: 1024px) { height: 305px; }
  @media all and (min-width: 1280px) { height: 382px; }
  @media all and (min-width: 1366px) { height: 478px; }
  @media all and (min-width: 1440px) { height: 520px; }
  @media all and (min-width: 1920px) { height: 540px; }
`
