import styled from 'styled-components';

export const SpecsItems = styled.div`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);
  grid-column-gap: 6px;
  justify-items: start;
  align-items: center;
  height: auto;
  margin-bottom: 1.5em;
  &:last-child {
    margin-bottom: 0;
  }
`

export const ImgItems = styled.img`
  grid-area: 1 / 1 / -1 / 2;
  margin: 0 0 0 0.4em;
  padding: 0;
  //border: 1px solid pink;
`

export const SpecsGroup = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

export const SpecsTitle = styled.h5`
  grid-area: 1 / 2 / 1 / -1;
  margin: 0;
  padding: 0;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-lt);
  color: var(--color-primary-grey);
  font-size: 1.125rem;
  //border: 1px solid blue;
`

export const SpecsSub = styled.p`
  grid-area: 2 / 2 / -1 / -1;
  margin: 0;
  padding: 0;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-lt);
  font-size: 1rem;
  color: var(--color-primary-grey);
  font-size: 1em;
  //border: 1px solid blue;
`

export const SpecsSpan = styled.span`
  font-weight: var(--ft-weight-semi);
`
