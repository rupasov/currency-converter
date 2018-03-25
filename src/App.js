import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StatesField from './Components/DropDown';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
          <div>
            <TextField hintText="Hint Text" />
          </div>
          <br />
          <div>
            <StatesField disabled={false} />
          </div>
          <div>
            <StatesField disabled={false} />
          </div>
          <div>
            <RaisedButton label="Primary" primary={true} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
