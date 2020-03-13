import React from 'react';
import Search from '../../containers/Search';
import DeckList from '../../containers/DeckList/DeckList';
import SearchCardDisplay from '../../containers/SearchCardDisplay/SearchCardDisplay';
import MaybeBoardDisplay from '../../containers/MaybeBoardDisplay/MaybeBoardDisplay';
// import './DeckBuilder.css';
import { Grid } from '@material-ui/core'

const tag = <img className="background" src="https://cdn.arstechnica.net/wp-content/uploads/2016/01/159984_CN-980x597.jpg" alt="default"/>

export default function DeckBuilder() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Search />
      </Grid>
      <Grid item xs={8}>
        <SearchCardDisplay />
      </Grid>
      <Grid item xs = {4}>
        <DeckList />
      </Grid>
      <Grid item xs={8}>
        <MaybeBoardDisplay />
      </Grid>
    </Grid>
  )
}
      