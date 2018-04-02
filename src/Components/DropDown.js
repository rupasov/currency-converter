import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { getSymbols } from '../utils/requests';

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
    getSymbols()
      .then(countries =>
        this.setState({
          states: Object.entries(countries.symbols).map(([k, v]) => ({
            value: k,
            label: `${k} - ${v}`
          }))
        })
      )
      .catch(e => console.log(`Something went wrong: ${e}`));
  },
  clearValue(e) {
    this.select.setInputValue('');
  },
  switchCountry(e) {
    var newCountry = e.target.value;
    this.setState({
      country: newCountry,
      selectValue: null
    });
  },
  updateValue(newValue) {
    this.setState({
      selectValue: newValue
    });
  },
  focusStateSelect() {
    this.refs.stateSelect.focus();
  },
  toggleCheckbox(e) {
    let newState = {};
    newState[e.target.name] = e.target.checked;
    this.setState(newState);
  },
  render() {
    var options = this.state.states;
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

export default StatesField;
