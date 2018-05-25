import styled from 'styled-components';
import transition from 'styled-transition-group';
import React from 'react';
import iconsArrows from '../../../assets/icons/icons-down-arrow.png';
import RuleSvgComp from './components/RuleSVG/RuleSvgComp';

export const Container = transition.section`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  background: var(--color-primary-white);
  @media all and (max-width: 1024px) { display: none }
  @media all and (min-width: 1024px) { height: 3.875em; padding: 0.4em 5em 0.4em; }
  @media all and (min-width: 1280px) { height: 3.875em; padding: 0.4em 5.5em 0.4em; }
  @media all and (min-width: 1440px) { height: 3.875em; padding: 0.4em 6em 0.4em; }

  /* Animation */
   &:enter {
    opacity: 0.01;
  }
  &:enter-active {
    opacity: 1;
    transition: opacity 150ms ease-in 300ms;
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 150ms ease-in 300ms;
  }
`

export const ProductPriceComp = styled.div`
  grid-area: 1 / 1 / -1 / 2;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: flex-start;
  height: 3.875em;
  width: 10em;

  color: var(--color-primary-grey);
  transition: color 200ms ease-in;
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

export const SizeGroup = transition.div`
  grid-area: 1 / 3 / -1 / 4;
  height: 3.875em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  user-select: none;
  @media all and (min-width: 768px) { margin: 0 auto; }
  @media all and (min-width: 1024px) { margin-left: 2em; }

   /* Animation */
   &:enter {
    opacity: 0.01;
  }
  &:enter-active {
    opacity: 1;
    transition: opacity 150ms ease-in 600ms;
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 150ms ease-in 600ms;
  }
`

export const ColorsGroup = transition.div`
  grid-area: 1 / 2 / -1 / 3;
  margin: -0.3em 0 0 1.2em;
  height: 3.875em;
  display: grid;
  /*grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(2, auto);*/
  grid-template-columns: repeat(2, auto);
  grid-template-rows: auto;
  justify-content: start;
  align-items: center;
  grid-column-gap: 4px;

  /* Animation */
   &:enter {
    opacity: 0.01;
  }
  &:enter-active {
    opacity: 1;
    transition: opacity 150ms ease-in 500ms;
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 150ms ease-in 500ms;
  }
`

export const ColorsOvalGroup = styled.div`
  grid-area: 1 / 2 / 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: 1fr;
  grid-column-gap: 4px;
  justify-items: start;
  align-items: center;
  height: auto;
  width: auto;
  margin: 0;
  padding: 0;
  cursor: pointer;
`

export const ColorsOvalImg = styled.img`
&:first-child {
  border: 1px solid white;
  border-radius: 100px;
  height: 24px;
  width: auto;
}
  height: 24px;
  width: auto;
`

export const ColorsLabel = styled.p`
  /*grid-area: 2 / 2 / -1 / -1;
  align-self: start;
  margin: 0;
  padding: 0;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-lt);
  color: var(--color-primary-white);
  font-size: 0.75rem;
  width: 8em;*/
  display: none;
`

export const ColorsLabels = styled.h5`
  grid-area: 1 / 1 / -1 / 2;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  font-size: 1rem;

  color: var(--color-primary-grey);
  transition: color 200ms ease-in;
`

export const LabelSize = styled.label`
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  font-size: 1rem;
  cursor: pointer;
  user-select: none;

  color: var(--color-primary-grey);
  transition: color 200ms ease-in;
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

export const InfoGroupStyled = transition.div`
  grid-area: 1 / 11 / -1 / -1;
  height: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-left: auto;

  /* Animation */
   &:enter {
    opacity: 0.01;
  }
  &:enter-active {
    opacity: 1;
    transition: opacity 150ms ease-in 1150ms;
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 150ms ease-in 1150ms;
  }
`

export const InfoTextStyled = styled.h5`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  color: var(--color-primary-grey);
  cursor: pointer;
  user-select: none;
  @media all and (min-width: 768px) {
    font-size: 1rem;
  }
  @media all and (min-width: 1024px) {
    &:last-child { margin-left: 0.5em; }
  }
`

export const InfoTextSpan = styled.span`

`

const RuleSvgCompRoot = ({ className }) => (
  <RuleSvgComp className={className} />
);
export const RuleSvgCompStyled = styled(RuleSvgCompRoot)`
  cursor: pointer;
`
