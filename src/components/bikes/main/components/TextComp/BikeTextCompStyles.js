import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 36px 0 36px;
  @media all and (max-width: 1024px) { display: none; }
  @media all and (min-width: 1024px) { display: flex; justify-content: center; }
`

export const TextGroup = styled.p`
  width: 784px;
  text-align: center;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-lt);
  color: var(--color-primary-grey);
  font-size: 1.3rem;
`
