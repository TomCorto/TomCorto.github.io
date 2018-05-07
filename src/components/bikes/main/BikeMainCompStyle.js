import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  @media (min-width: 1024px) {
    padding: 0 5% 0;
  }
  @media (min-width: 1280px) {
    padding: 0 5% 0;
  }
`

export const BikeProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-auto-rows: auto;
  grid-column-gap: 32px;
  grid-row-gap: 48px;
  @media all and (min-width: 1280px) { width: 1072px; }
  @media all and (min-width: 1280px) { width: 1072px; }
`
