import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import NumberTextField from './NumberTextField';
import TextField from 'material-ui/TextField';

const a = NumberTextField;

const NumberInput = () => (
  <div>
    <NumberFormat
      hintText="1"
      format="### ### ### ### ### ### ###"
      customInput={TextField}
    />
  </div>
);

export default NumberInput;
