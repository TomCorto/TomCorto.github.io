import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  height: auto;
  top: 0;
  background-color: var(--color-primary-white);
  border: 1px solid yellow;
  @media all and (max-width: 1024px) { display: none; }
  @media all and (min-width: 1024px) {
    width: 10em;
    padding: 1em 0.5em 4em 0.5em;
  }
  @media all and (min-width: 1280px) {
    width: 13em;
    padding: 1em 0.5em 4em 0.5em;
  }
`

export const SelectorItems = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
  padding: 0;
  cursor: pointer;
  user-select: none;
`

export const SelectorTitle = styled.div`
  font-family: var(--ft-primary);
  font-weight: var(--ft-weight-reg);
  color: var(--color-primary-grey);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media all and (min-width: 1024px) { font-size: 1.2rem; }
  @media all and (min-width: 1280px) { font-size: 1.3rem; }
`

export const SelectorIcon = styled.img``

export const SelectorItemsBg = styled.div`
  background-color: transparent;
`

export const ListCheckboxItems = styled.div`
  margin: 0;
  padding: 0;
`

export const HrStyled = styled.hr`
  width: 100%;
  background: var(--color-primary-grey);
`
