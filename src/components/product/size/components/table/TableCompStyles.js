import styled from 'styled-components';

export const Container = styled.div`
  color: var(--color-primary-white);
`
export const HeaderTitle = styled.h3`
  font-family: var(--ft-semi-pro);
  font-weight: var(--ft-weight-semi);
  color: var(--color-primary-white);
  margin: 0;
  padding: 0;
  @media all and (max-width: 768px) { font-size: 1.25rem; }
  @media all and (min-width: 768px) { font-size: 2.25rem; }
`

export const Table = styled.table`
  border-spacing: 10px;
  border-collapse: separate;
`

export const Thead = styled.thead`
  border-bottom: 2px solid var(--color-primary-grey);
  padding-bottom: 1em;
`

export const TH = styled.th`
  text-align: left;
`
export const THMeasure = TH.extend`
  font-weight: var(--ft-weight-lt);
  font-size: 0.9rem;
`

export const TR = styled.tr`
  padding: 20px 1.75em 0.625em 0;
`

export const TD = styled.td`
  font-weight: var(--ft-weight-lt);
  text-align: center;
  padding: 0 1.75em 0.625em 0;
  &:first-child { font-weight: var(--ft-weight-semi); }
  &:last-child { padding: 0; }
`
