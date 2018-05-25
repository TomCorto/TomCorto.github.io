import styled from 'styled-components';
import transition from 'styled-transition-group';

export const Container = transition.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  background: var(--color-primary-white);
  line-height: 24px;
  user-select: none;
  overflow: hidden;
  @media all and (max-width: 1024px) { padding: 2em 0 2em; }
  @media all and (min-width: 1024px) { padding: 5em 0 5em; }
`

export const Text = transition.p`
  font-family: var(--ft-semi-pro);
  color: var(--color-primary-grey);
  text-align: center;
  @media all and (max-width: 1024px) { font-size: 1rem; font-weight: var(--ft-weight-reg); max-width: 75vw; }
  @media all and (min-width: 1024px) { font-size: 1.5rem; font-weight: var(--ft-weight-lt); max-width: 68vw; }

  /* Animation */
  &:enter {
    opacity: 0.01;
  }
  &:enter-active {
    opacity: 1;
    transition: opacity 150ms ease-in 900ms;
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 150ms ease-in 900ms;
  }
`

export const Title =  transition.h3`
  margin: 0;
  padding: 0;
  overflow: hidden;
  color: var(--color-primary-red);
  font-weight: var(--ft-weight-semi-pro);
  @media all and (max-width: 1024px) { font-size: 1.5rem; font-weight: var(--ft-weight-reg); max-width: 75vw; }
  @media all and (min-width: 1024px) { font-size: 2rem; font-weight: var(--ft-weight-reg); max-width: 68vw; }

  &:enter {
    opacity: 0.01;
  }
  &:enter-active {
    opacity: 1;
    transition: opacity 150ms ease-in 1000ms;
  }
  &:exit {
    opacity: 1;
  }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 150ms ease-in 1000ms;
  }
`
