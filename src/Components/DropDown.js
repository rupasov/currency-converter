import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import '../App.css';

class DropDown extends Component {
  state = {
    disabled: this.props.disabled,
    searchable: this.props.searchable,
    selectValue: this.props.selectValue,
    clearable: true,
    rtl: false
  };

  updateValue = newValue => {
    this.props.onChange(newValue);
    this.setState({
      selectValue: newValue
    });
  };

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

export default DropDown;
