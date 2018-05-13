import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 500px;
  margin: 0;
  position: relative;
  /*@media all and (min-width: 1024px) { padding: 10vh 12vw 10vh; }*/
`

export const FrameStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: auto;
  grid-row-gap: 12px;
  height: auto;
  width: 100%;
  background-color: white;
  @media all and (max-width: 1024px) { padding: 10vw 12vw 10vw }
  @media all and (min-width: 1024px) { padding: 10vw 12vw 10vw }
  @media all and (min-width: 1280px) { padding: 10vw 12vw 10vw }
  @media all and (min-width: 1366px) { padding: 10vw 12vw 10vw }
`

export const FrameImg = styled.img`
  width: 100%;
  @media all and (max-width: 1024px) { padding: 10vw 12vw 10vw }
  @media all and (min-width: 1024px) { padding: 10vw 12vw 10vw }
  @media all and (min-width: 1280px) { padding: 10vw 12vw 10vw }
  @media all and (min-width: 1366px) { padding: 10vw 12vw 10vw }
`

export const HeaderRed = styled.h5`
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  font-size: 2.25rem;
  color: var(--color-primary-red);
`

export const TextMain = styled.p`
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  font-size: 1.25rem;
  color: var(--color-primary-grey);
`
