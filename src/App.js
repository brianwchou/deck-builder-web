import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import CardBox from './CardBox';
import Search from './Search';
import './App.css';
import Navbar from './Navbar'
import NoMatch from './NoMatch';
import DeckBuilder from './DeckBuilder';

const Brian = () => {
  return (
    <div>
      <Search />
      <CardBox />
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={DeckBuilder} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route component = {NoMatch}/>
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;