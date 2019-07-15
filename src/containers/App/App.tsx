import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Navbar from '../../components/Navbar'
import NoMatch from '../../components/NoMatch';
import DeckBuilder from '../../containers/DeckBuilder';

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