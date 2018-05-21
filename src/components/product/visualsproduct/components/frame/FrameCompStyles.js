import styled from 'styled-components';

export const Container = styled.section`
  margin: 0;
  padding: 0;

  @media all and (min-width: 480px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    justify-items: center;
    align-items: center;
    grid-row-gap: 1.5em;
    margin: 5vh 0 5vh;
    padding: 0;
    width: 100%;
    margin: 1rem 0 0;
    background-color: var(--color-primary-white);
  }
  @media all and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    align-items: center;
    margin: 4em 0 4em;
    padding: 0;
    background: var(--color-primary-white);
    width: 100%;
    height: 400px;
  }
  @media all and (min-width: 1024px) {
    margin: 8vh 0 8vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
    height: auto;
  }
  @media all and (min-width: 1280px) { margin: 8vh 0 8vh; }
`

export const TextGroup = styled.div`
  margin: 0;
  padding: 0;
  user-select: none;
  @media all and (max-width: 768px) { grid-area: 1 / 1 / 2 / -1; width: 80%; }
  @media all and (min-width: 768px) { grid-area: 1 / 1 / 2 / -1; width: 80%; }
  @media all and (min-width: 1024px) { grid-area: 1 / 1 / 2 / 2; width: 80%; }
  @media all and (min-width: 1280px) {  width: 80%; }
  @media all and (min-width: 1440px) { width: 70%; }
`

export const HeaderRed = styled.h5`
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  color: var(--color-primary-red);
  margin: 0;
  padding: 0;
  text-align: center;
  @media all and (max-width: 480px) { font-size: 2rem; }
  @media all and (min-width: 480px) { font-size: 2rem; }
  @media all and (min-width: 768px) { font-size: 1.75rem; }
  @media all and (min-width: 1024px) { font-size: 2rem; }
  @media all and (min-width: 1280px) { font-size: 2.25rem; }
`

export const TextMain = styled.p`
  font-family: var(--ft-source-pro);
  color: var(--color-primary-grey);
  padding: 0;
  text-align: center;
  @media all and (max-width: 768px) { margin: 0; display: none; font-weight: var(--ft-weight-semi); margin: 0.7rem 0 0; }
  @media all and (min-width: 768px) { font-size: 1.1rem; display: flex; font-weight: var(--ft-weight-semi); margin: 0.7rem 0 0; };
  @media all and (min-width: 1024px) { font-size: 1.2rem; margin: 1rem 0 0; }
  @media all and (min-width: 1280px) { font-size: 1.3rem; font-weight: var(--ft-weight-lt); }
`

export const ImageFrame = styled.img`
  grid-area: 1 / 2 / 1 / -1;
  height: auto;
  @media all and (max-width: 480px) { grid-area: 2 / 1 / -1 / -1; max-width: 80%;}
  @media all and (min-width: 480px) { grid-area: 2 / 1 / -1 / -1; max-width: 100%;}
  @media all and (min-width: 768px) { grid-area: 1 / 2 / 1 / -1; max-width: 80%;}
  @media all and (min-width: 1024px) { max-width: 100%; }
`
