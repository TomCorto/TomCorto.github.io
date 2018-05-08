import styled from 'styled-components';
import imgSrc from '../../../../../assets/icons/icons-select-arrows-down.png';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  @media all and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    justify-items: end;
    align-items: center;
  }
  @media all and (max-width: 1024px) { display: none; }
`

export const SelectorSelect = styled.select`
  width: 136px;
  height: 26px;
  padding:0 13px 0;
  background: url(${imgSrc}) no-repeat 90% 50% #ffffff;
  border: 1px solid #979797;
  border-radius: 2px;
  appearance: none;
  grid-area: 1 / 2 / 1 / 2;
  &:focus {
    box-shadow: 2px 2px 2px rgba(255, 255, 255, 0.6);
  }
`

export const SelectorItemsBg = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`

export const SelectorOption = styled.option`
  background-color: white;
  appearance: none;
  font-family: var(--ft-primary);
  font-weight: var(--ft-weight-reg);
  font-size: 50px;
`

export const ItemsCount = styled.h6`
  grid-area: 1 / 3 / 1 / -1;
  font-family: var(--ft-primary);
  color: var(--color-primary-grey);
  font-size: 1rem;
  font-weight: var(--ft-weight-reg);
  font-style: var(--ft-style-itl);
`
