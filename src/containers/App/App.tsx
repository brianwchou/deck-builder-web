import { BrowserRouter, Route, Switch} from 'react-router-dom';
// import './App.css';
import Navbar from '../../components/Navbar';
import NoMatch from '../../components/NoMatch';
import DeckBuilder from '../../containers/DeckBuilder';
import React from 'react';
import { AppBar, Toolbar, Box } from '@material-ui/core';

const App = () => {
  return (
    <Box width="100%" height="100%">
      <AppBar position="static">
        <Toolbar>
          hello world
        </Toolbar>
      </AppBar>
      <BrowserRouter basename="/deck-builder-web/">
          <Switch>
            <Route exact path="/" component={DeckBuilder} />
            <Route component={NoMatch} />
          </Switch>
      </BrowserRouter>
    </Box>
  )
}

export default App;