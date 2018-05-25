import styled from 'styled-components';
import transition from 'styled-transition-group';

export const Container = transition.button`
  margin: 3em auto 0;
  padding: 0.75em 1.5em 0.75em;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-family: var(--ft--source-pro);
  font-weight: var(--ft-weight-semi);
  font-size: 1.2rem;
  background: ${props => (props.colorProps ? "#FFFFFF" : "#DE0019")};
  color: ${props => (props.colorProps ? "#DE0019" : "#FFFFFF")};

  // Animation //
  &:enter {
    opacity: 0.01;
    display: none;
  }
  &:enter-active {
    display: flex;
    opacity: 1;
    transition: all 150ms ease-in;
  }
  &:exit { opacity: 0.01; }
  &:exit-active {
    display: none;
    opacity: 0.01;
    transition: all 150ms ease-in;
  }
`;
