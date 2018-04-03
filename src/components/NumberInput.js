import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import NumberTextField from './NumberTextField';
import TextField from 'material-ui/TextField';

const a = NumberTextField;

const NumberInput = ({ onChange }) => (
  <div>
    <NumberFormat
      hintText="1"
      format="### ### ### ### ### ### ###"
      customInput={TextField}
      onValueChange={values => onChange(values.value)}
    />
  </div>
);

export default NumberInput;
