import styled from 'styled-components';
import React from 'react';


export const Container = styled.section`
  margin: 0;
  background: black;

@media all and (max-width: 768px) {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  justify-items: center;
  align-items: center;
  grid-row-gap: 1.5em;
  margin: 5vh 0 5vh;
  padding: 10vh 0 10vh;
  padding: 0;
  width: 100%;
}
@media all and (min-width: 768px) {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  margin: 6vh 0 6vh;
  padding: 10vh 0 10vh;
  width: 100%;
  height: auto;
}
@media all and (min-width: 1024px) {
  margin: 8vh 0 8vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
}
@media all and (min-width: 1280px) { margin: 8vh 0 8vh; padding: 12vh 0 12vh; }
`

export const Text = styled.p`
  font-family: var(--ft-semi-pro);
  font-weight: var(--ft-weight-reg);
  color: var(--color-primary-white);
  text-align: center;
  @media all and (max-width: 1024px) { font-size: 1rem; max-width: 75vw; }
  @media all and (min-width: 1024px) { font-size: 1rem; max-width: 68vw; }
`

export const ImgSpecs = styled.img`
  margin-bottom: 1em;
`

export const SpecsContainer1 = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const SpecsContainer2 = SpecsContainer1.extend``

const TextGroup = ({ className, children }) => (
  <Text className={className}>{children}</Text>
);

export const TextGroupStyled = styled(TextGroup)`
  user-select: none;
  @media all and (min-width: 480px) { grid-area: 1 / 1 / 2 / -1; width: 80%; line-height: 24px; }
  @media all and (min-width: 768px) { grid-area: 1 / 1 / 2 / -1; width: 80%; line-height: 24px; }
  @media all and (min-width: 1024px) { grid-area: 1 / 1 / 2 / 2; width: 80%; line-height: 24px; }
  @media all and (min-width: 1280px) {  width: 80%; line-height: 24px; }
  @media all and (min-width: 1440px) { width: 70%; line-height: 24px; }
`
