import styled from 'styled-components';

export const Container = styled.section`
  margin: 0;
  background: black;

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
}
@media all and (min-width: 768px) {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr 1fr;
  justify-items: center;
  align-items: center;
  margin: 6vh 0 6vh;
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
@media all and (min-width: 1280px) { margin: 8vh 0 8vh; }
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
