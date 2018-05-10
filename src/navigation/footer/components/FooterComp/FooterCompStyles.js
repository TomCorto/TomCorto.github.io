import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: var(--color-primary-grey);
  @media all and (max-width: 480px) {
    padding: 2em 0 0;
    height: 10em;
  }
  @media all and (min-width: 480px) {
    height: 10em;
    padding: 2em 0 0;
  }
  @media all and (min-width: 768px) {
    height: 20em;
  }
  @media all and (min-width: 1024px) {
    height: 15em;
  }
`

export const Logo = styled.img`
  justify-content: center;
`

export const FooterGroupItems = styled.ul`
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  @media all and (max-width: 480px) { margin-bottom: 3em; }
  @media all and (min-width: 480px) { margin-bottom: 3em; }
  @media all and (min-width: 768px) { margin-bottom: 3em; }
  @media all and (min-width: 1024px) { margin-bottom: 3em; }
`

export const FooterItemsList = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  padding: 0;
  @media all and (max-width: 480px) { display: none; }
  @media all and (min-width: 480px) { width: 90vw; }
  @media all and (min-width: 768px) { width: 80vw; }
  @media all and (min-width: 1024px) { width: 60vw; }
`

export const FooterItems = styled.li`
  font-family: var(--ft-source-pro);
  font-size: 1.2rem;
  font-weight: var(--ft-weight-semi);
  color: var(--color-primary-white);
`
