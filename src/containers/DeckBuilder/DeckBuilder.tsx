import React from 'react';
import Search from '../../containers/Search';
import DeckList from '../../containers/DeckList/DeckList';
import SearchCardDisplay from '../../containers/SearchCardDisplay/SearchCardDisplay';
import MaybeBoardDisplay from '../../containers/MaybeBoardDisplay/MaybeBoardDisplay';
import { Grid, withStyles } from '@material-ui/core'
import Metrics from '../Metrics';

const tag = <img className="background" src="https://cdn.arstechnica.net/wp-content/uploads/2016/01/159984_CN-980x597.jpg" alt="default"/>

const styles = theme => ({
  gridPadding: {
    paddingTop: '20px'
  }
});

function DeckBuilder(props) {
  const { classes } = props;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Search />
      </Grid>
      <Grid item xs={7}>
        <SearchCardDisplay />
      </Grid>
      <Grid item xs= {4}>
        <DeckList />
      </Grid>
      <Grid className={classes.gridPadding} item xs={7}>
        <MaybeBoardDisplay />
      </Grid>
      <Grid className={classes.gridPadding} item xs= {4}>
        <Metrics />
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(DeckBuilder);