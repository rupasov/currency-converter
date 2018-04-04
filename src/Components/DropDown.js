import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { fetchSymbols, changeTargetCurrency } from '../actions';

class StatesField extends Component {
  state = {
    disabled: this.props.disabled,
    searchable: this.props.searchable,
    selectValue: this.props.selectValue,
    clearable: true,
    rtl: false
  };

  updateValue = newValue => {
    this.props.changeTargetCurrency(newValue);
    this.setState({
      selectValue: newValue
    });
  };

  render() {
    var options = this.props.options;
    return (
      <div className="section">
        <Select
          id="state-select"
          ref={ref => {
            this.select = ref;
          }}
          onBlurResetsInput={false}
          onSelectResetsInput={false}
          autoFocus
          options={options}
          simpleValue
          clearable
          name="selected-state"
          disabled={this.props.disabled}
          value={this.state.selectValue}
          onChange={this.updateValue}
          rtl={false}
          searchable
        />
      </div>
    );
  }
}

const mapStateToProps = ({ currency }) => ({
  //symbols: currency.symbols,
  targetCurrency: currency.targetCurrency
});

const mapDispatchToProps = {
  fetchSymbols,
  changeTargetCurrency
};

export default connect(mapStateToProps, mapDispatchToProps)(StatesField);
