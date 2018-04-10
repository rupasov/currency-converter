import React from 'react';
import NumberFormat from 'react-number-format';

const NumberInput = ({ onChange, value }) => (
  <div>
    <NumberFormat
      className="number-input"
      value={value}
      thousandSeparator
      allowNegative={false}
      onValueChange={values => onChange(values.value)}
    />
  </div>
);

export default NumberInput;
