import styled from 'styled-components';
import transition from 'styled-transition-group';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 90%;
  background-color: #eeeeee;
  margin: 1em 0 1em;
  user-select: none;
  @media all and (min-width: 1024px) { display: none; }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`

export const FilterTitle = styled.h5`
  margin: 0 0.2em 0;
  padding: 0.7em 0 0.7em;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  color: rgb(69, 69, 69);
  font-size: 1rem;
  cursor: pointer;
`

export const ContainerDropdown = transition.div.attrs({
  unmountOnExit: true,
  timeout: 50
})`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  &:enter { opacity: 0.01; }
  &:enter-active {
    opacity: 1;
    transition: opacity 150ms ease-in;
  }
  &:exit { opacity: 1; }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 150ms ease-in;
  }
`

export const MenuContainer = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 90%;
  //background-color: var(--color-primary-white);
`

export const MenuItemsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
`

export const MenuTitle = styled.h5`
  font-family: var(--ft-source-pro);
  font-size: 1rem;
  font-weight: var(--ft-weight-reg);
  color: var(--color-primary-grey);
  text-align: center;
  margin: 0 auto;
`

export const MenuIcons = styled.img`
  height: 1em;
  width: 1em;
`

export const MenuHR = styled.hr`
  width: 100%;
`

export const SubmitSearch = styled.button`
  width: 98%;
  margin: 1.5em 0 0.5em;
  height: 50px;
  border: none;
  background: #8B8B8B;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  color: var(--color-primary-white);
  font-size: 1.1rem;
  text-align: center;
`
