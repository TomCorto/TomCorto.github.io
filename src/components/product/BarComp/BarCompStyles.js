import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 35px;
  width: 100%;
  background: #F6F6F6;
`

export const ProductRange = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const ProductRangeText = styled.h5`
  margin-left: 1.5em;
  font-family: var(--ft-source-pro);
  color: var(--color-primary-grey);
  font-weight: 400;
  font-size: 1rem;
`
export const ProductLocalNavigation = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`

export const ProductRangeIcon = styled.div`
  margin-left: 0.5em;
  transform: rotate(0deg);
  transition: transform 150ms ease-in;
  ${ProductRange}:hover & {
    transform: rotate(-180deg);
    transition: transform 200ms ease-in;
  }
`

export const NavigationItems = styled.span`
  height: 100%;
  background-color;
  font-family: var(--ft-source-pro);
  color: var(--color-primary-grey);
  font-weight: 400;
  font-size: 1rem;
  margin-right: 1.5em;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
