import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import DropDown from './components/DropDown';
import NumberInput from './components/NumberInput';
import Chart from './components/Chart';
import {
  fetchSymbols,
  changeAmount,
  calcRate,
  getGraph,
  changeTargetCurrency
} from './actions';
import './App.css';
import coupleWithDog from './img/doggos_walk.png';

class App extends Component {
  componentDidMount() {
    this.props.fetchSymbols();
  }

  render() {
    const {
      amount,
      changeAmount,
      symbols,
      calcRate,
      getGraph,
      changeTargetCurrency,
      convertedValue,
      targetCurrency,
      historicalData
    } = this.props;
    return (
      <div className="App">
        <div className="converter-container">
          <div className="width-60">
            <div className="margin-bottom-20">
              <NumberInput onChange={changeAmount} value={amount} />
            </div>
            <div className="input-container">
              <DropDown
                disabled
                targetCurrency="EUR"
                symbols={[{ label: 'EUR - Euro', value: 'EUR' }]}
              />
            </div>
            <div className="input-container">
              <DropDown
                disabled={false}
                targetCurrency={targetCurrency}
                symbols={symbols}
                onChange={changeTargetCurrency}
              />
            </div>
            <div className="input-container">
              <RaisedButton
                label="Calculate"
                fullWidth
                labelColor="#ffffff"
                backgroundColor="#56D5C0"
                onClick={() => calcRate(targetCurrency)}
              />
            </div>
            <div className="button-container">
              <RaisedButton
                label="Show Graph"
                fullWidth
                labelColor="#ffffff"
                backgroundColor="#4568E5"
                onClick={() => getGraph(targetCurrency)}
              />
            </div>
            {convertedValue && (
              <div className="result-container">
                <NumberFormat
                  value={parseFloat(amount)}
                  suffix={' EUR = '}
                  thousandSeparator
                  displayType={'text'}
                />
                <NumberFormat
                  value={convertedValue}
                  suffix={` ${targetCurrency}`}
                  thousandSeparator
                  displayType={'text'}
                />
              </div>
            )}
            {historicalData.length > 0 && <Chart data={historicalData} />}
          </div>
        </div>
        <div className="image-container">
          <img className="image" src={coupleWithDog} alt="couple-with-dog" />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  changeAmount: PropTypes.func,
  symbols: PropTypes.array,
  calcRate: PropTypes.func,
  getGraph: PropTypes.func,
  changeTargetCurrency: PropTypes.func,
  convertedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  targetCurrency: PropTypes.string,
  historicalData: PropTypes.array
};

const mapStateToProps = ({ currency }) => ({
  symbols: currency.symbols,
  amount: currency.amount,
  targetCurrency: currency.targetCurrency,
  convertedValue: currency.convertedValue,
  historicalData: currency.historicalData
});

const mapDispatchToProps = {
  fetchSymbols,
  changeAmount,
  changeTargetCurrency,
  calcRate,
  getGraph
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
