import styled from 'styled-components';
import transition from 'styled-transition-group';
import iconsZoom from '../../../assets/icons/icons-zoom-plus.png';

export const Container = styled.div`
  background: var(--color-primary-white);
  width: 100%;

  @media all and (max-width: 480px ) {
    margin-top: 2.25em;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    overflow:hidden;
    z-index: 1000;
    }
  @media all and (min-width: 480px ) {
    margin-top: 2.25em;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    overflow:hidden;
    z-index: 1000;
    }
  @media all and (min-width: 480px ) {
    margin-top: 2.25em;
    z-index: 1000;
    }
  @media all and (min-width: 1024px) {
    margin-top: 2.25em;
    padding: 1em 2em 1em;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    overflow:hidden;
    z-index: 1000;
  }
`

export const ImgMainStyled = transition.img` /* @ImgMainStyled - Image Main Product */
  margin: 0 auto;
  height: auto;
  position: relative;
  cursor: url(${iconsZoom}), auto;
  @media all and (max-width: 1024px) { max-width: 90%; }
  @media all and (min-width: 1024px) { max-width: 55%; }
  @media all and (min-width: 1280px) { max-width: 60%; }
  @media all and (min-width: 1366px) { max-width: 70%; }
  @media all and (min-width: 1440px) { max-width: 100%; }

  /* Animation */
   &:enter {
    opacity: 0;
  }
  &:enter-active {
    opacity: 1;
    transition: opacity 150ms ease-in 100ms;
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0;
    transition: opacity 300ms ease-in 100ms;
  }
`

export const ImgCustomStyled = styled.img`
  margin: 0 0.5em 0 0;
`

export const ButtonGroup = transition.div` /* @ButtonGroup - Button Group */
  height: auto;

   @media all and (max-width: 480px) {
    width: 95%;
    margin-top: 1.5em;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
  }
   @media all and (min-width: 480px) {
    width: 95%;
    margin-top: 1.5em;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
  }

  @media all and (min-width: 768px) {
    width: 90%;
    margin-top: 2em;
  }
  @media all and (min-width: 1024px) {
    width: 12em;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    position: absolute;
    top: 26em;
    right: 2%;
    font-size: 1rem;
    padding: 0.8em 1.4em 0.8em;
  }
  @media all and (min-width: 1280px) { top: 30em; }
  @media all and (min-width: 1366px) { top: 32em; }
  @media all and (min-width: 1440px) { top: 33em; }

   /* Animation */
   &:enter {
    opacity: 0;
  }
  &:enter-active {
    opacity: 1;
    transition: opacity 150ms ease-in 1100ms;
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0;
    transition: opacity 300ms ease-in 1100ms;
  }
`

export const CustomizeCTA = styled.button` /* @CustomizeCTA - Button Personnalize display  >=  1024 */
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

export const ButtonCTA = styled.button`
  position: relative;
  height: auto;
  width: 100%;
  background: var(--color-primary-red);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  color: var(--color-primary-white);
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  cursor: pointer;
  @media all and (max-width: 1024px) { font-size: 1rem; padding: 0.8em 1.4em 0.8em; }
  @media all and (min-width: 1024px) { font-size: 1rem; padding: 0.8em 1.4em 0.8em; }
  @media all and (min-width: 1440px) { font-size: 1.1rem; }
`

export const ButtonCTAStores = ButtonCTA.extend`
  background: var(--color-primary-blue);
  @media all and (max-width: 480px) { margin-bottom: 0.5em; }
  @media all and (min-width: 480px) { margin-right: 2em; }
  @media all and (min-width: 1024px) { display: none; }
`

export const IconsCTA = styled.img`
  height: 20px;
  width: 20px;
  margin: 0 0.5em 0 0;
`

export const IconsLocation = IconsCTA.extend`
  height: 28px;
  width: 20px;
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
