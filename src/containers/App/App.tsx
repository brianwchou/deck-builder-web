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
        <BrowserRouter basename="/deck-builder-web/">
            <Switch>
                <Route exact path="/" component={DeckBuilder} />
                <Route component={NoMatch} />
            </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;