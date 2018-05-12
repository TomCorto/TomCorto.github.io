import styled from 'styled-components';

export const Container = styled.section`
  color: pink;
  position: absolute;
  background: pink;
  height: 40em;
  width: 100%;
  z-index: 1005;
  @media all and (min-width: 480px) { display: none; }
  @media all and (min-width: 768px) { top: 3em; height: auto; display: flex; }
  @media all and (min-width: 1024px) { top: 2.5em; height: auto; }
`
