import styled from 'styled-components';

export const Container = styled.button`
  margin: 3em 0 0 0;
  padding: 0.75em 1.5em 0.75em;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-family: var(--ft--source-pro);
  font-weight: var(--ft-weight-semi);
  font-size: 1.2rem;
  background: ${props => props.colorProps ? '#FFFFFF' : '#DE0019'};
  color: ${props => props.colorProps ? '#DE0019' : '#FFFFFF'};
`
