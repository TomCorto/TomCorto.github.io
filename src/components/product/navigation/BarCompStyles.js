import styled from 'styled-components';
import transition from 'styled-transition-group';

export const Container = styled.div`
  z-index: 1000;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  user-select: none;
  background: #F6F6F6;
  transition: top 150ms ease-in;
  @media all and (max-width: 480px) {
    top: 3em;
    height: 2.5em;
    display: flex;
   }
  @media all and (min-width: 480px) {
    top: 3em;
    height: 3em;
    display: flex;
   }
  @media all and (min-width: 768px) {
    top: 3em;
    height: 3em;
    display: flex;
  }
  @media all and (min-width: 1024px) {
    top: ${props => props.toggleMenu ? '3.75em' : '3em'} ;
    height: 3em;
    transition: top 150ms ease-in;
  }
`

export const BreadcrumbGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1010;
  @media all and (max-width: 480px ) { margin-left: 1.2em; }
  @media all and (min-width: 480px ) { margin-left: 1.5em; }
  @media all and (min-width: 768px ) { margin-left: 3em; }
  @media all and (min-width: 1024px) { margin-left: 2em; }
`

export const BreadCrumbText = styled.h5`
  font-family: var(--ft-source-pro);
  color: var(--color-primary-grey);
  font-weight: 400;
  @media all and (min-width: 768px) { font-size: 1rem; }
  @media all and (min-width: 1024px) { font-size: 1rem; }
  &:hover {
    text-decoration: underline;
    transition: text-decoration 100ms ease-in;
  }
`

export const ProductBreadCrumbSeparator = styled.img`
  border: none;
  margin: 0 0.5em 0;
  padding: 0;
`

export const ProductLocalNavigation = styled.div`
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  z-index: 1010;
  @media all and (max-width: 1024px) { display: none; }
  @media all and (min-width: 1024px) { display: flex; }
`

export const NavigationItems = styled.span`
  height: 100%;
  background-color;
  font-family: var(--ft-source-pro);
  color: var(--color-primary-grey);
  font-weight: 400;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media all and (min-width: 480px ) { margin-right: 1.5em; }
  @media all and (min-width: 768px ) { margin-right: 2em; }
  @media all and (min-width: 1024px) { margin-right: 1.5em; }
`
