import styled from 'styled-components';

export const Container = styled.div`
  background-color: #F3F3F3;
  width: 154px;
  @media all and (min-width: 1024px) {
    padding: 0.5em 1em 0.5em;
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
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //background-color: green;
  width: 100%;
`

export const SelectorIcon = styled.img``

export const SelectorItemsBg = styled.div`
  //margin: 5px 10px 5px;
  background-color: transparent;
`

export const LabelStyled = styled.label`
  cursor: pointer;

  & > input[type="checkbox"] + ${Checkmark}{
    display: none;
  }
`

export const CheckboxStyled = styled.input`

`

export const Checkmark = styled.span`
  display: none;
`
/*
/*Original  input[type="checkbox"]:checked + span */
/*${CheckboxStyled}+ & {
  background: #D9534F -19px top no-repeat;
}*/
