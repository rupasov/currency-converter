import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import StatesField from './components/DropDown';
import NumberInput from './components/NumberInput';
import { getRate } from './utils/requests';
import { fetchSymbols, changeAmount, calcRate } from './actions';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchSymbols();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div>
            <img src="http://code.divshot.com/geo-bootstrap/img/test/construction.gif" />
          </div>
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <br />
          <NumberInput onChange={this.props.changeAmount} />
          <div>
            <StatesField
              disabled
              selectValue="EUR"
              options={[{ label: 'EUR - Euro', value: 'EUR' }]}
            />
          </div>
          <div>
            <StatesField selectValue="USD" options={this.props.symbols} />
          </div>
          <div>
            <RaisedButton
              label="Calc"
              primary
              onClick={() => this.props.calcRate(this.props.targetCurrency)}
            />
          </div>
          <div>
            <p>{this.props.convertedValue}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ currency }) => ({
  symbols: currency.symbols,
  amount: currency.amount,
  targetCurrency: currency.targetCurrency,
  convertedValue: currency.convertedValue
});

const mapDispatchToProps = {
  fetchSymbols,
  changeAmount,
  calcRate
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
