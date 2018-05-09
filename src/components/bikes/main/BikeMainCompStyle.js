import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  //width: 95vw;
  width: 90%;
  //overflow: hidden;
  @media (min-width: 1024px) { padding: 0 5% 0; }
  @media (min-width: 1280px) { padding: 0 5% 0; }
`

export const BikeProductContainer = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-column-gap: 2vw;
  grid-row-gap: 3vh;
  width: 100%;
  border: 1px solid blue;
  @media all and (min-width: 768px) { grid-template-columns: repeat(3, auto); justify-items: center; }
  @media all and (min-width: 1024px) { grid-template-columns: repeat(3, auto); justify-items: end; }
  @media all and (min-width: 1280px) { grid-template-columns: repeat(3, auto); justify-items: end; }
`

export const BikeDisplayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: 1fr;
  border: 1px solid pink;
  width: 100%;
  overflow: visible !important;
  @media all and (min-width: 1024px) { grid-column-gap: 2%; }
  @media all and (min-width: 1280px) { grid-column-gap: 2%; }
  @media all and (min-width: 1366px) { grid-column-gap: 2%; }
`
