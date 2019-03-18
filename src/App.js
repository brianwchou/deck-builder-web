import React, { Component } from 'react';
import CardBox from './CardBox';
import Search from './Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Search />
        <CardBox />
      </div>
    )
  }
}

export default App;