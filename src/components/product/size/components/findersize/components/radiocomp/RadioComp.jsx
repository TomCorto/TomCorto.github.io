import React from 'react';
import PropTypes from 'prop-types';
import { InputGroupset, Label, RadioGroup, LabelRadio,  InputGroup, Input } from './RadioCompStyles';

const RadioComp = ({ labelProps, onChange, checked }) => (
  <InputGroupset>
    <Label>{labelProps}</Label><br/>
    <RadioGroup>
      <LabelRadio htmlFor="">
        <input type="radio" value={"Homme"} />
        Homme
      </LabelRadio>
      <LabelRadio htmlFor="">
        <input type="radio" value={"Homme"} />
        Femme
      </LabelRadio>
    </RadioGroup>
  </InputGroupset>
)

export default RadioComp;
