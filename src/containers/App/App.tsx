import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Navbar from '../../components/Navbar';
import NoMatch from '../../components/NoMatch';
import DeckBuilder from '../../containers/DeckBuilder';
import React from 'react';
import { Grid } from 'semantic-ui-react';

const App = () => {
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Navbar />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <BrowserRouter>
          <Switch>
            <Route exact path="/home" component={DeckBuilder} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route component = {NoMatch}/>
          </Switch>
          </BrowserRouter>
          </Grid.Column>
      </Grid.Row>  
    </Grid>
  )
}


export default App;