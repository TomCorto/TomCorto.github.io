import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  background: var(--color-primary-white);
  @media all and (max-width: 1024px) { padding: 2em 0 2em; }
  @media all and (min-width: 1024px) { padding: 2.5em 0 2.5em; }
`
export const Text = styled.p`
  font-family: var(--ft-semi-pro);
  font-weight: var(--ft-weight-reg);
  color: var(--color-primary-grey);
  text-align: center;
  @media all and (max-width: 1024px) { font-size: 1rem; max-width: 75vw; }
  @media all and (min-width: 1024px) { font-size: 1rem; max-width: 68vw; }
`
