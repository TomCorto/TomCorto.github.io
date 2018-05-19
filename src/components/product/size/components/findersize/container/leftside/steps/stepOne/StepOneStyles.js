import React from 'react';
import styled from 'styled-components';
import InputGroupSetText from '../../../../components/input/InputGroupSetText';
import RadioComp from '../../../../components/radiocomp/RadioComp';


const RadioCompGender = ({ className, labelProps }) => (
  <RadioComp className={className} labelProps={labelProps} />
);
export const RadioCompGenderStyled = styled(RadioCompGender)`
  /*grid-area: 1 / 1 / 2 / 4;*/
  background: blue;
`;

const InputGroupSetTextHeight = ({ className, labelProps, placeholderProps, value, onChange }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} value={value} onChange={onChange} />
);
export const InputGroupSetTextHeightStyled = styled(InputGroupSetTextHeight)`
  /*grid-area: 2 / 1 / 3 / 2;*/
  margin: 0;
  padding: 0;
  border: 1px solid blue;
`

const InputGroupSetTextWeight = ({ className, labelProps, placeholderProps, value, onChange }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} value={value} onChange={onChange} />
);
export const InputGroupSetTextWeightStyled = styled(InputGroupSetTextWeight)`
  /*grid-area: 3 / 1 / -1 / 2;*/
`
