import React from 'react';
import Search from './Search';
import Decklist from './Decklist';
import Metrics from './Metrics'
import SearchCardDisplay from './SearchCardDisplay';
import './App.css'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <div className="flexboxes">
          <SearchCardDisplay />
          <Metrics />
          <Decklist />
        </div>
        <img className="background" src="https://cdn.arstechnica.net/wp-content/uploads/2016/01/159984_CN-980x597.jpg" alt="default"/>
      </div>
    )
  }
}
