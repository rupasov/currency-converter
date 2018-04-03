import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { connect } from 'react-redux';

import { fetchSymbols, changeTargetCurrency } from '../actions';

var StatesField = createClass({
  displayName: 'StatesField',
  propTypes: {
    label: PropTypes.string,
    searchable: PropTypes.bool
  },
  getDefaultProps() {
    return {
      label: 'States:',
      searchable: true
    };
  },
  getInitialState() {
    return {
      disabled: this.props.disabled,
      searchable: this.props.searchable,
      selectValue: this.props.selectValue,
      clearable: true,
      rtl: false
    };
  },
  componentDidMount() {
    this.props.fetchSymbols();
  },
  updateValue(newValue) {
    this.props.changeTargetCurrency(newValue);
    this.setState({
      selectValue: newValue
    });
  },
  render() {
    var options = this.props.symbols;
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
          clearable={this.state.clearable}
          name="selected-state"
          disabled={this.state.disabled}
          value={this.state.selectValue}
          onChange={this.updateValue}
          rtl={this.state.rtl}
          searchable={this.state.searchable}
        />
      </div>
    );
  }
});

const mapStateToProps = ({ currency }) => ({
  symbols: currency.symbols,
  targetCurrency: currency.targetCurrency
});

const mapDispatchToProps = {
  fetchSymbols,
  changeTargetCurrency
};

export default connect(mapStateToProps, mapDispatchToProps)(StatesField);
