import React from 'react';
import styled from 'styled-components';
import transition from 'styled-transition-group';
import InputGroupSetText from './components/input/InputGroupSetText';
import RadioComp from './components/radiocomp/RadioComp';
import ButtonComp from '../button/ButtonComp';

export const Container = transition.section`
  background: var(--color-primary-white);
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid black;

  @media all and (min-width: 1024px) {
    width: 768px;
    height: auto;
    padding: 2em 3em 2em;
  }
  // Animation //
  &:enter {
    opacity: 0.01;
    transform:translateY(-50%);
  }
  &:enter-active {
    opacity: 1;
    transform:translateY(0%);
    transition: all 350ms linear;
  }
  &:exit { opacity: 1; }
  &:exit-active {
    opacity: 0;
    transform:translateY(-100%);
    transition: all 400ms ease-in;
  }
`

export const HeaderGroup = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 auto;
`


export const HeaderRed = styled.h5`
  font-family: var(--ft-source-pro);
  font-weight: var(--ft-weight-semi);
  font-size: 2rem;
  color: var(--color-primary-red);
  margin: 0;
  padding: 0;
`

export const CloseGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  font-family: var(--ft-semi-pro);
  color: var(--primary-grey);
  cursor: pointer;
  & > span {
    margin-right: 1em;
    font-family: var(--ft-source-pro);
    font-weight: var(--ft-weight-reg);
    font-size: 1rem;
    color: var(--colors-primary-grey);
  }
`


export const CrossIcons = styled.img`
  height: 18px;
  width: 19px;
`


export const FormGroup = transition.form`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  grid-column-gap: 8px;
  grid-column-row: 8px;
  width: 100%;
  margin: 1.5em 0 0 0;

  // Animation //
  &:enter {
    opacity: 0.01;
  }
  &:enter-active {
    opacity: 1;
    transition: all 5000ms ease-in;
  }
  &:exit { opacity: 1; }
  &:exit-active {
    opacity: 0.01;
    transition: opacity 5000ms ease-in;
  }
`

export const FormSubGroup = styled.div`
  width: auto;
  grid-area: 2 / 1 / -1 / -1;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  justify-items: center;
  grid-row-gap: 24px;
  grid-column-gap: 24px;
  margin: 1em 0 0 0;
`


const RadioCompGender = ({ className, labelProps }) => (
  <RadioComp className={className} labelProps={labelProps} />
);
export const RadioCompGenderStyled = styled(RadioCompGender)`
  grid-area: 1 / 1 / 2 / 4;
  background: blue;
`;


const InputGroupSetTextHeight = ({ className, labelProps, placeholderProps }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} />
);
export const InputGroupSetTextHeightStyled = styled(InputGroupSetTextHeight)`
  grid-area: 2 / 1 / 3 / 2;
`

const InputGroupSetTextWeight = ({ className, labelProps, placeholderProps }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} />
);
export const InputGroupSetTextWeightStyled = styled(InputGroupSetTextWeight)`
  grid-area: 3 / 1 / -1 / 2;
`


const InputGroupSetTextChest = ({ className, labelProps, placeholderProps }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} />
);
export const InputGroupSetTextChestStyled = styled(InputGroupSetTextChest)`

`

const InputGroupSetTextLegs = ({ className, labelProps, placeholderProps }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} />
);
export const InputGroupSetTextLegsStyled = styled(InputGroupSetTextLegs)`

`

const InputGroupSetTextShoulder = ({ className, labelProps, placeholderProps }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} />
);
export const InputGroupSetTextShoulderStyled = styled(InputGroupSetTextShoulder)`

`

const InputGroupSetTextArms = ({ className, labelProps, placeholderProps }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} />
);
export const InputGroupSetTextArmsStyled = styled(InputGroupSetTextArms)`

`

const ButtonCTA = ({ className, propsText, onClick, colorProps }) => (
  <ButtonComp className={className} propsText={propsText} onClick={onClick} colorProps={colorProps} />
);
export const ButtonStyled = styled(ButtonCTA)`
  margin: 10em 0 0 0;
`;
