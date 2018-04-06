import React from 'react';
import NumberFormat from 'react-number-format';
import TextField from 'material-ui/TextField';

const NumberInput = ({ onChange, value }) => (
  <div>
    <NumberFormat
      value={value}
      thousandSeparator
      allowNegative={false}
      onValueChange={values => onChange(values.value)}
      style={{ height: '34px' }}
    />
  </div>
);

export default NumberInput;
