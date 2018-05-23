import styled from 'styled-components';
import iconsZoom from '../../../assets/icons/icons-zoom-plus.png';

export const Container = styled.div`
  background: var(--color-primary-white);
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  overflow:hidden;
  z-index: 1000;
  @media all and (min-width: 480px ) {  margin-top: 2.25em; }
  @media all and (min-width: 768px) { margin-top: 3em; }
  @media all and (min-width: 1024px) { margin-top: 2.25em; padding: 1em 2em 1em; }
`

export const ImgMainStyled = styled.img`
  margin: 0 auto;
  height: auto;
  position: relative;
  cursor: url(${iconsZoom}), auto;
  @media all and (max-width: 1024px) { max-width: 90%; }
  @media all and (min-width: 1024px) { max-width: 55%; }
  @media all and (min-width: 1280px) { max-width: 60%; }
  @media all and (min-width: 1366px) { max-width: 70%; }
  @media all and (min-width: 1440px) { max-width: 100%; }
`

export const ButtonGroup = styled.div`
  position: absolute;
  height: auto;
  width: 12em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  @media all and (max-width: 1024px) { display: none; }
  @media all and (min-width: 1024px) { top: 26em; right: 2%; font-size: 1rem; display: flex; padding: 0.8em 1.4em 0.8em; }
  @media all and (min-width: 1280px) { top: 30em; right: 2%; font-size: 1rem; display: flex; padding: 0.8em 1.4em 0.8em; }
  @media all and (min-width: 1366px) { top: 32em; right: 2%; font-size: 1rem; display: flex; }
  @media all and (min-width: 1440px) { top: 33em; right: 2%; font-size: 1.1rem; display: flex; }
`

export const CustomizeCTA = styled.button`
  position: relative;
  height: auto;
  width: 100%;
  margin-bottom: 0.5em;
  background: #1F1F1F;
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  color: var(--color-primary-white);
  font-family: var(--ft-source-pro);
  font-weight: 400;
  cursor: pointer;
  @media all and (max-width: 1024px) { display: none; }
  @media all and (min-width: 1024px) { font-size: 1rem; display: flex; padding: 0.5em 0.875em 0.5em; }
  @media all and (min-width: 1280px) { font-size: 1rem; display: flex; padding: 0.7em 0.875em 0.7em; }
  @media all and (min-width: 1366px) { font-size: 1rem; display: flex; padding: 0.8em 1.4em 0.8em; }
  @media all and (min-width: 1440px) { font-size: 1rem; display: flex; }
`

export const ImgCustomStyled = styled.img`
  margin: 0 0.5em 0 0;
`

export const ButtonCTA = styled.button`
  position: relative;
  height: auto;
  width: 100%;
  background: var(--color-primary-red);
  border: none;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  color: var(--color-primary-white);
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  cursor: pointer;
  @media all and (max-width: 1024px) { display: none; }
  @media all and (min-width: 1024px) { font-size: 1rem; display: flex; padding: 0.8em 1.4em 0.8em; }
  @media all and (min-width: 1280px) { font-size: 1rem; display: flex; padding: 0.8em 1.4em 0.8em; }
  @media all and (min-width: 1366px) { font-size: 1rem; display: flex; padding: 0.8em 1.4em 0.8em;}
  @media all and (min-width: 1440px) { font-size: 1.1rem; display: flex; }
`

export const IconsCTA = styled.img`
  height: 20px;
  width: 20px;
  margin: 0 0.5em 0 0;
`

export const LogoBike = styled.img`
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  position: absolute;
  @media all and (max-width: 1024px) { display: none; }
  @media all and (min-width: 1024px) {top: 35em; }
  @media all and (min-width: 1280px) { top: 40em; }
  @media all and (min-width: 1366px) { top: 45em; }
  @media all and (min-width: 1440px) { top: 45em; }
`
