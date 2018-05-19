import styled from 'styled-components';
import React from 'react';
import InputGroupSetText from '../../../../components/input/InputGroupSetText';

const InputGroupSetTextChest = ({ className, labelProps, placeholderProps, value, onChange }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} value={value} onChange={onChange} />
);
export const InputGroupSetTextChestStyled = styled(InputGroupSetTextChest)`
`

const InputGroupSetTextLegs = ({ className, labelProps, placeholderProps, value, onChange }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} value={value} onChange={onChange} />
);
export const InputGroupSetTextLegsStyled = styled(InputGroupSetTextLegs)`

`

const InputGroupSetTextShoulder = ({ className, labelProps, placeholderProps, value, onChange }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} value={value} onChange={onChange} />
);
export const InputGroupSetTextShoulderStyled = styled(InputGroupSetTextShoulder)`

`

const InputGroupSetTextArms = ({ className, labelProps, placeholderProps, value, onChange }) => (
  <InputGroupSetText labelProps={labelProps} placeholderProps={placeholderProps} value={value} onChange={onChange} />
);
export const InputGroupSetTextArmsStyled = styled(InputGroupSetTextArms)`

`
