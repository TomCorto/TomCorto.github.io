import styled from 'styled-components';

export const Container = styled.div`
  grid-area: 1 / 1 / -1 / 2;
  margin: 0 0 0 2em;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: flex-start;
  height: 3.875em;
  width: 10em;

  color: var(--color-primary-grey);
  transition: color 200ms ease-in;
`

export const ModelStyled = styled.h2`
  margin: 0;
  padding: 0;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  font-size: 1.5rem;
  cursor: pointer;
  user-select: none;
`

export const PriceStyled = styled.h3`
  margin: 0;
  padding: 0;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-lt);
  font-size: 1rem;
  cursor: pointer;
  user-select: none;
  &:hover {
    text-decoration: underline;
    transition: all 100ms ease;
  }
`
