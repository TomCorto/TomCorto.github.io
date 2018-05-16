import styled from 'styled-components';

export const InputGroupset = styled.div`
  height: auto;
  width: 230px;
  border-radius: 3px;
`

export const Label = styled.label`
  color: var(--color-primary-red);
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  font-size: 1rem;
  line-height: 1.5rem;
`

export const InputGroup = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-items: flex-start;
  align-items: center;
  /*box-shadow: 2px 2px 2px red;*/
`

export const Input = styled.input`
  appearance: textfield;
  width: 160px;
  height: 28px;
  padding: 2px 0 2px 6px;
  border: 1px solid var(--color-primary-grey);
  border-right: none;
  border-radius: 3px 0 0 3px;
  font-family: var(--ft-semi-pro);
  color: rgb(60, 60, 60);
  font-weight: var(--ft-weight-semi);
  font-size: 1rem;
  &:placeholder {
    padding-left: 12px;
    color: rgba(175, 175, 175, 0.2);
  }
`

export const Span = styled.span`
  border: 1px solid var(--color-primary-grey);
  border-left: none;
  border-radius: 0 3px 3px 0;
  display: inline-block;
  height: 22px;
  /*width: auto;*/
  padding: 7px 16px 3px;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-lt);
  color: var(--color-primary-grey);
  font-size: 1rem;
  /*position: absolute;*/
  position: relative;
`
