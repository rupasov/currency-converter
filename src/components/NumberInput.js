import React from 'react';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

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

NumberInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default NumberInput;
