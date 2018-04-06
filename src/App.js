import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import StatesField from './components/DropDown';
import NumberInput from './components/NumberInput';
import { AreaChart } from 'react-easy-chart';
import { getRate } from './utils/requests';
import { fetchSymbols, changeAmount, calcRate, getGraph } from './actions';
import './App.css';
import { format } from 'date-fns';

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
              labelColor="#ffffff"
              backgroundColor="#56D5C0"
              onClick={() => this.props.calcRate(this.props.targetCurrency)}
            />
          </div>
          <div>
            <RaisedButton
              label="Graph"
              labelColor="#ffffff"
              backgroundColor="#4568E5"
              onClick={() => this.props.getGraph(this.props.targetCurrency)}
            />
          </div>
          <div>
            <p>{this.props.convertedValue}</p>
          </div>
          {this.props.historicalData.length > 0 && (
            <div>
              <AreaChart
                xType={'time'}
                axes
                width={700}
                height={500}
                interpolate={'cardinal'}
                areaColors={['#F3AF75']}
                grid
                data={[
                  this.props.historicalData.map(data => ({
                    x: format(new Date(data.date), 'D-MMM-YY'),
                    y: data.rates[this.props.targetCurrency]
                  }))
                ]}
              />
            </div>
          )}
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
  calcRate,
  getGraph
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
