import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const FormStyled = styled.form`
  height: 32px;
`

const LabelStyled = styled.label`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`

const InputStyled = styled.input`
  width: 250px;
  /*height: 32px;*/
  height: 100%;
  border: none;
  margin: 0;
  padding: 7px 0 7px 12px;
  border-radius: 3px 0 0 3px;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  font-size: 14px;
`
const ButtonStyled = styled.button`
  margin: 0;
  padding: 0;
  padding: 0 1em 0;
  height: 32px;
  width: auto;
  position: relative;
  color: white;
  border: none;
  border-radius: 0 3px 3px 0;
  font-family: var(--ft-source-pro);
  font-size: 14px;
  background: var(--color-primary-red);
`

const FooterSubscribeComp = ({onSubmit}) => (
  <FormStyled>
    <LabelStyled>
      <InputStyled type="text" placeholder={"email"}/>
      <ButtonStyled type="button">Je m'inscris !</ButtonStyled>
    </LabelStyled>
  </FormStyled>
);

export default FooterSubscribeComp;
