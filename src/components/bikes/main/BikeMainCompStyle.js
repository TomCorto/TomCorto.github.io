import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  @media (min-width: 1024px) { padding: 0 5% 0; }
  @media (min-width: 1280px) { padding: 0 5% 0; }
`

export const BikeProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-auto-rows: auto;
  grid-column-gap: 32px;
  grid-row-gap: 48px;
  justify-items: end;
  width: 100%;
`

export const BikeDisplayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: 1fr;
  grid-row-gap: 20px;
  justify-items: start;
  width: 100%;
`
