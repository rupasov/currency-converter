import React from 'react';
import NumberFormat from 'react-number-format';

const NumberInput = ({ onChange, value }) => (
  <div>
    <NumberFormat
      className="number-format"
      value={value}
      thousandSeparator
      allowNegative={false}
      onValueChange={values => onChange(values.value)}
      style={{ height: '34px', width: '77%' }}
    />
  </div>
);

export default NumberInput;
