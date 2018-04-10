import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const DropDown = ({ onChange, disabled, symbols, targetCurrency }) => (
  <div className="section">
    <Select
      id="state-select"
      onBlurResetsInput={false}
      onSelectResetsInput={false}
      autoFocus
      options={symbols}
      simpleValue
      clearable
      name="selected-state"
      disabled={disabled}
      value={targetCurrency}
      onChange={onChange}
      rtl={false}
      searchable
    />
  </div>
);

DropDown.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  symbols: PropTypes.array,
  targetCurrency: PropTypes.string
};

export default DropDown;
