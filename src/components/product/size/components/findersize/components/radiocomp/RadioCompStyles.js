import styled from 'styled-components';

export const InputGroupset = styled.div`
  height: auto;
  width: 258px;
  border-radius: 3px;
`

export const Label = styled.label`
  color: var(--color-primary-red);
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  font-size: 1rem;
  line-height: 1.5rem;

`

export const Fieldset = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`

export const RadioGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  height: auto;
  width: 190px;
  padding: 0 1em 0;
  border: 1px solid var(--color-primary-grey);
  border-radius: 3px;
`


export const LabelRadio = styled.label`
  color: var(--color-primary-grey);
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  font-size: 1rem;
  line-height: 32px;
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
  /*appearance: textfield;*/
  width: 200px;
  height: 28px;
  padding: 2px 0 2px 6px;
  border: 1px solid var(--color-primary-grey);
  border-right: none;
  border-radius: 3px 0 0 3px;
  font-family: var(--ft-semi-pro);
  color: rgb(60, 60, 60);
  font-weight: var(--ft-weight-semi);
  font-size: 1.1rem;
  &:focus {
    /*box-shadow: 2px 2px 4px rgb(87, 110, 227);*/
  }
  &:placeholder {
    padding-left: 12px;
    color: rgba(175, 175, 175, 0.2);
  }
`
