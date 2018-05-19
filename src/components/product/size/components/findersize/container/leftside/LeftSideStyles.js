import React from 'react';
import styled from 'styled-components';
import transition from 'styled-transition-group';
import ButtonComp from '../../../button//ButtonComp';
import ButtonSizeCTA from '../../components/button/ButtonSizeCTA.jsx';
import InputGroupSetText from '../../components/input/InputGroupSetText';
import RadioComp from '../../components/radiocomp/RadioComp';

export const Container = styled.div` /* Left Side Container */
  background-color: var(--color-primary-white);
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0 0 2em 0;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`

export const ReturnGroup = styled.div`
  grid-area: 1 / 1 / 2 / -1;
  justify-self: start;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  width: 100%;
  height: 1.5em;
  margin: 1em 0 0 1em;
  padding: 0;
  align-items: center;
  color: var(--color-primary-grey);
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

export const ReturnIcons = styled.img`
  height: auto;
  width: 24px;
  margin: 0;
  padding: 0;
`

export const TextSub = styled.p` /* @TextSub - Header Text Sub */
  margin: 0.5em 0 0 0;
  padding: 0 28px 0;
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  font-size: 14px;
  color: ${props => props.colorProps};
  text-align: center;
`

export const FormGroup = styled.form` /* @FormGroup - Form Container */
  margin: 2em 0 2em 0;
  padding: 0;
  display: grid;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 0 0 12px;
  }
  &:last-child {
    margin: 64px;
  }
`

const ButtonCTA = ({ className, propsText, onClick, colorProps }) => (
  <ButtonComp className={className} propsText={propsText} onClick={onClick} colorProps={colorProps} />
);
export const ButtonStyled = styled(ButtonCTA)`
  margin: 10em 0 0 0;
`

export const ResultGroup = transition.div`
  height: auto;
  width: auto;
`



export const ReturnText = styled.p`
  margin: 0;
  padding: 0;
  color: var(--ft-primary-grey);
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-reg);
  font-size: 0.75rem;
`

const ButtonSizeCTARoot = ({ className, colorProps, textProps, onClick }) => ( /* Step 3 - CTA Checkout */
  <ButtonSizeCTA className={className} colorProps={colorProps} textProps={textProps} onClick={onClick} />
)
export const ButtonSizeCTAStyled = styled(ButtonSizeCTARoot)`
  margin-top: 64px;
`
