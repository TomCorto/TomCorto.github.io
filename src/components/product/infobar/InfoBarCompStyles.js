import styled from 'styled-components';
import iconsArrows from '../../../assets/icons/icons-down-arrow.png';

export const Container = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  background: var(--color-primary-grey);
  @media all and (max-width: 768px) { display: none }
  @media all and (min-width: 768px) { height: 3.875em; padding: 0.4em 5em 0.4em; }
  @media all and (min-width: 1024px) { height: 3.875em; padding: 0.4em 5em 0.4em; }
  @media all and (min-width: 1280px) { height: 3.875em; padding: 0.4em 5.5em 0.4em; }
  @media all and (min-width: 1440px) { height: 3.875em; padding: 0.4em 6em 0.4em; }
`

export const ProductPriceComp = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: flex-start;
  height: 100%;
  color: var(--color-primary-white);
`

export const ModelStyled = styled.h2`
  margin: 0;
  padding: 0;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  font-size: 1.5rem;
  cursor: pointer;
  user-select: none;
`

export const PriceStyled = styled.h3`
  margin: 0;
  padding: 0;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-lt);
  font-size: 1rem;
  cursor: pointer;
  user-select: none;
  &:hover {
    text-decoration: underline;
    transition: all 100ms ease;
  }
`

export const SizeGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  user-select: none;
  @media all and (min-width: 768px) { margin: 0 auto; }
  @media all and (min-width: 1024px) { margin-left: 6vw; }
`

export const LabelSize = styled.label`
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  color: var(--color-primary-white);
  font-size: 1rem;
  cursor: pointer;
  user-select: none;
`

export const SelectSize = styled.select`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  border-radius: 3px;
  appearance: none;
  border: 1px solid var(--color-primary-grey);
  background: var(--color-primary-white);
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  font-size: 1rem;
  color: var(--color-primary-grey);
  height: 2em;
  width: 5.3em;
  padding: 0.2em;
  cursor: pointer;
  user-select: none;
  background-image: url(${iconsArrows}) no-repeat 97% 50% #ffffff;
  @media all and (min-width: 768px) { margin-left: 0.5vw; }
  @media all and (min-width: 1024px) { margin-left: 0.5vw; }
`

export const InfoGroupStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
`

export const InfoTextStyled = styled.h5`
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  color: var(--color-primary-white);
  cursor: pointer;
  user-select: none;
  @media all and (min-width: 768px) { margin-left: 3em; font-size: 1rem;  }
  @media all and (min-width: 1024px) { margin-left: 3.75em; }
`
