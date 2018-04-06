import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import DropDown from './components/DropDown';
import NumberInput from './components/NumberInput';
import { AreaChart } from 'react-easy-chart';
import { getRate } from './utils/requests';
import {
  fetchSymbols,
  changeAmount,
  calcRate,
  getGraph,
  changeTargetCurrency
} from './actions';
import './App.css';
import { format } from 'date-fns';
import coupleWithDog from './img/doggos_walk.png';
import NumberFormat from 'react-number-format';

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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            width: '50%'
          }}
        >
          <div style={{ width: '60%' }}>
            <br />
            <NumberInput onChange={changeAmount} value={amount} />
            <div style={{ width: '80%', marginBottom: '20px' }}>
              <DropDown
                disabled
                selectValue="EUR"
                symbols={[{ label: 'EUR - Euro', value: 'EUR' }]}
              />
            </div>
            <div style={{ width: '80%', marginBottom: '20px' }}>
              <DropDown
                selectValue="USD"
                symbols={symbols}
                onChange={changeTargetCurrency}
              />
            </div>
            <div style={{ marginBottom: '20px', width: '80%' }}>
              <RaisedButton
                label="Calculate"
                fullWidth
                labelColor="#ffffff"
                backgroundColor="#56D5C0"
                onClick={() => calcRate(targetCurrency)}
              />
            </div>
            <div style={{ marginBottom: '60px', width: '80%' }}>
              <RaisedButton
                label="Gimme Da Graph"
                fullWidth
                labelColor="#ffffff"
                backgroundColor="#4568E5"
                onClick={() => getGraph(targetCurrency)}
              />
            </div>
            {convertedValue && (
              <div
                style={{
                  border: '1px solid #000',
                  padding: '10px',
                  width: '76%'
                }}
              >
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
            {historicalData.length > 0 && (
              <div>
                <AreaChart
                  xType={'time'}
                  axes
                  width={700}
                  height={500}
                  areaColors={['#F3AF75']}
                  data={[historicalData]}
                />
              </div>
            )}
          </div>
        </div>
        <div style={{ width: '50%' }}>
          <img src={coupleWithDog} style={{ width: '80%' }} />
        </div>
      </div>
    );
  }
}

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
