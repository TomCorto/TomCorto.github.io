import styled from 'styled-components';


export const Container = styled.form`
  height: 40px;
  width: auto;
  background-color: blue;
  position: relative;
`

export const LabelStyled = styled.label`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`


export const ButtonStyled = styled.button`
  margin: 0;
  padding: 0;
  height: 40px;
  width: 120px;
  position: relative;
  color: var(--color-primary-white);
  border: none;
  border-radius: 0 2px 2px 0;
  box-sizing: border-box;
  font-family: var(--ft-source-pro);
  font-size: 14px;
  border: 1px solid #bdbdbd;
  background: var(--color-primary-grey);
  cursor: pointer;

  &:hover {
    background: rgba(105, 105, 105, 1);
    transition: background 150ms ease-in;
  }
`

export const InputStyled = styled.input`
  width: 160px;
  height: 40px;
  border: none;
  margin: 0;
  padding: 7px 0 7px 12px;
  box-sizing: border-box;
  border-radius: 2px 0 0 2px;
  background: rgb(215, 215, 215);
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  font-size: 14px;
  ${ButtonStyled}:hover {
    background: rgb(236, 236, 236);
    transition: background 150ms ease-in;
  }
`
