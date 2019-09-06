import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from '../../components/Navbar'
import NoMatch from '../../components/NoMatch';
import DeckBuilder from '../../containers/DeckBuilder';
import React from 'react';

const App = () => {
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

export default App;