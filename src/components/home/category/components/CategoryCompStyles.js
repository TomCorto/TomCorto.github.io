import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 768px) { display: none; }
`

export const BlockImage = styled.div`
  background: url(${props => props.propsBackgroundImg}) center center no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;
  height: 32vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const H2Styled = styled.h2`
  color: var(--color-primary-white);
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  @media (max-width: 480px) { font-size: 3rem; }
  @media (min-width: 480px) { font-size: 3.5rem; }
  @media (min-width: 768px) { font-size: 2.2rem; }
  @media (min-width: 1024px) { font-size: 2.2rem; }
`
export const H5Styled = styled.h5`
  padding: 0;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  color: var(--color-primary-red);
  @media (max-width: 480px) { display: none; }
  @media (min-width: 768px) { margin: 1em 0.75em 0 0.5em; font-size: 1.25rem; }
  @media (min-width: 1024px) { margin: 1em 0.75em 0 0.5em; font-size: 1.4rem; }
`
export const TextStyled = styled.p`
  display: block;
  padding: 0;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  color: var(--color-primary-black);
  @media (min-width: 768px) { margin: 0.2em 0.75em 0 0.5em; font-size: 1rem; }
  @media (min-width: 1024px) { margin: 0.2em 0.75em 0 0.5em; font-size: 1rem; }
`
