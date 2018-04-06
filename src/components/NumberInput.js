import React from 'react';
import NumberFormat from 'react-number-format';
import TextField from 'material-ui/TextField';

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
