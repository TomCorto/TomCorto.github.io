import React from 'react';
import PropTypes from 'prop-types';
import { InputGroupset, Label, RadioGroup, LabelRadio, InputGroup, Input, Fieldset } from './RadioCompStyles';

const RadioComp = ({ labelProps, onChange, checkedM, checkedW, onChangeM, onChangeW }) => (
    <InputGroupset>
        <Fieldset>
        <Label>{labelProps}</Label><br/>
            <RadioGroup>
                <LabelRadio htmlFor="">
					<input type="radio" value={"Homme"} checked={checkedM} onChange={onChangeM} defaultChecked />
                    Homme
      </LabelRadio>
                <LabelRadio htmlFor="">
                    <input type="radio" value={"Homme"} checked={checkedW} onChange={onChangeW} />
                    Femme
      </LabelRadio>
            </RadioGroup>
        </Fieldset>
  </InputGroupset>
)

RadioComp.propType = {
    labelProps: PropTypes.string.isRequired
}

export default RadioComp;
