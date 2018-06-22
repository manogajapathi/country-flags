import React, { Component } from 'react';
import './App.css';
import IndexPage from './components/index-home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IndexPage/>
      </div>
    );
  }
}

export default App;
