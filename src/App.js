import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StatesField from './components/DropDown';
import RaisedButton from 'material-ui/RaisedButton';
import { getRate } from './utils/requests';
import NumberInput from './components/NumberInput';

class App extends Component {
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
          <NumberInput />
          <div>
            <StatesField disabled selectValue="EUR" />
          </div>
          <div>
            <StatesField selectValue="USD" />
          </div>
          <div>
            <RaisedButton
              label="Calc"
              primary
              onClick={() => console.log(getRate('USD'))}
            />
          </div>
          <div>
            <p>dsfsdf</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
