import styled from 'styled-components';


export const TableGroupDesktop = styled.div` /* Container */
  width: auto;
  @media all and (min-width: 480px) {
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
  }
  @media all and (min-width: 768px) {
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
  }
  @media all and (min-width: 1024px) {
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    justify-items: center;
    align-items: center;
  }
  @media all and (min-width: 1280px) { width: 1156px; }
  @media all and (min-width: 1440px) {  width: auto; }
`

export const ItemsGroup = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;

  @media all and (min-width: 768px) {
    &:first-child { border-right: 1px solid black; }
    &:nth-of-type(2) { padding-left: 1.5em; }
    &:last-child { border-left: 1px solid black; padding-left: 1.5em; }
  }

  @media all and (min-width: 1024px) {
    &:first-child { border-right: 1px solid black; }
    &:nth-of-type(2) { padding-left: 1.5em; }
    &:last-child { border-left: 1px solid black; padding-left: 1.5em; }
  }

  @media all and (min-width: 1280px) {
    &:first-child { }
    &:nth-of-type(2) { padding-left: 2em; }
    &:last-child { padding-left: 1.5em; }
  }
  @media all and (min-width: 1440px) {
    &:first-child { }
    &:nth-of-type(2) { padding-left: 4em; }
    &:last-child { padding-left: 3em; }
  }
`
