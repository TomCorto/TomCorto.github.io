import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  @media all and (max-width: 480px) { justify-content: center; align-items: center;
    width: 100%;
    overflow: hidden;
  }
  @media all and (min-width: 480px) { justify-content: center; align-items: center;
    width: 100%;
    overflow: hidden;
  }
  @media all and (min-width: 768px) { justify-content: center; align-items: center;
    width: 100%;
    overflow: hidden;
  }
  @media (min-width: 1024px) { padding: 0 5% 0; width: 90%; }
  @media (min-width: 1280px) { padding: 0 5% 0; width: 90%; }
`

export const BikeDisplayContainer = styled.div`
  display: grid;
  border: 1px solid pink;
  width: 100%;
  overflow: visible !important;
  border: 1px solid pink;
  @media all and (max-width: 480px) { grid-column-gap: 10%; justify-items: center; width: 90%; }
  @media all and (min-width: 480px) { grid-column-gap: 10%; justify-items: center; width: 90%; }
  @media all and (min-width: 768px) { grid-column-gap: 10%; justify-items: center; width: 90%; }
  @media all and (min-width: 1024px) { grid-template-columns: repeat(2, auto); grid-template-rows: 1fr; grid-column-gap: 2%; justify-items: center; width: 100%; }
  @media all and (min-width: 1280px) { grid-column-gap: 2%; justify-items: start; width: 100%; }
  @media all and (min-width: 1366px) { grid-column-gap: 2%; justify-items: start; width: 100%; }
`

export const BikeProductContainer = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-column-gap: 2vw;
  grid-row-gap: 3vh;
  width: 100%;
  border: 1px solid blue;
  @media all and (max-width: 480px) { grid-area: 1 / 1 / -1 / -1; grid-template-columns: repeat(2, auto); justify-items: center; }
  @media all and (min-width: 480px) { grid-area: 1 / 1 / -1 / -1; grid-template-columns: repeat(2, auto); justify-items: center; }
  @media all and (min-width: 768px) { grid-area: 1 / 1 / -1 / -1; grid-template-columns: repeat(2, auto); justify-items: center; }
  @media all and (min-width: 1024px) { grid-area: 1 / 2 / -1 / -1; grid-template-columns: repeat(3, auto); justify-items: end; }
  @media all and (min-width: 1280px) { grid-template-columns: repeat(3, auto); justify-items: end; }
`
