import React from 'react';
import PropTypes from 'prop-types';
import InputGroupSetTextStyles from 'styled-components';
import { Label, Input, Span, InputGroup, InputGroupset } from './InputGroupSetTextStyles';

const InputGroupSetText = ({ labelProps, placeholderProps, value, onChange, onError }) => (
  <InputGroupset>
    <Label>{labelProps}</Label>
    <InputGroup>
      <Input type="number" placeholder={placeholderProps} value={value} onChange={onChange} />
      <Span>cm</Span>
    </InputGroup>
  </InputGroupset>
);

export default InputGroupSetText;
