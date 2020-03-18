import React, {  Dispatch } from 'react'
import { connect } from 'react-redux';
import { filteredSearchURL } from '../../common/URLs';
import { getCardSearchData } from '../../actions/SearchActions';
import { Button, TextField, Checkbox, Select, MenuItem, InputLabel, FormControl, Grid, Box } from '@material-ui/core';

const manaSymbolStyle = {
  maxWidth: "15px",
  maxHeight: "15px",
}

type SearchState = {
  textbox: string;
  filterColors: string;
  cardType: string;
}

type SearchProps = {
  dispatch: Dispatch<any>;
  error: boolean
}

const mapStateToProps = ({searchDisplay}: {searchDisplay: {error: boolean}} ) => {
  return { error: searchDisplay.error };
}

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);

    this.state = {
      textbox: "",
      filterColors: "",
      cardType: "",
    }

    this.getCards = this.getCards.bind(this);
  }

  getCards = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let searchCardNameURL: string = filteredSearchURL + this.state.textbox;
  
    searchCardNameURL += (this.state.cardType) ? `+t:${this.state.cardType}` : "";

    searchCardNameURL += (this.state.filterColors) ? `+c:${this.state.filterColors}` : "";

    searchCardNameURL += "&unique";

    this.props.dispatch(getCardSearchData(searchCardNameURL));
  }

  handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    let color = e.target.value;
    let { filterColors } = this.state;
    
    if (filterColors.includes(color)) {
      let newfilterColors = filterColors.replace(color, "");
      this.setState({ filterColors: newfilterColors });
    } else {
      this.setState({ filterColors: filterColors.concat(e.target.value) });
    }
  }

  onSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ textbox: e.target.value });
  }

  handleSelect = (e: React.ChangeEvent<{value: unknown}>) => {
    const value = e.target.value as string
    this.setState({ cardType: value });
  }

  render() {
    return (
      <form onSubmit={this.getCards}>
        <Grid container>
          <Grid container spacing={3}>
          <Grid item xs={7} >
          <TextField
            error={this.props.error}
            id="outlined-error-helper-text"
            fullWidth
            helperText={""}
            onChange={this.onSearchTextChange}
          />
          </Grid>
          <Grid item>
              <Button size="small" variant="contained" type="submit">search</Button> 
          </Grid>

        </Grid>
          <br/>
          <Grid container item xs={6} spacing={1}>
            <Grid item xs={2}>
              <Checkbox value="w" onChange={this.handleCheck} />
              <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/8/8e/W.svg" alt="white_mana" style={manaSymbolStyle}/> &nbsp;
            </Grid>
            <Grid item xs={2}>
              <Checkbox value="u" onChange={this.handleCheck} />
              <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/9/9f/U.svg" alt="blue_mana" style={manaSymbolStyle}/> &nbsp;
            </Grid>
            <Grid item xs={2}>
              <Checkbox value="b" onChange={this.handleCheck} />
              <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/2/2f/B.svg" alt="black_mana" style={manaSymbolStyle}/> &nbsp;
            </Grid>
            <Grid item xs={2}>
              <Checkbox value="r" onChange={this.handleCheck} />
              <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/8/87/R.svg" alt="red_mana" style={manaSymbolStyle}/> &nbsp;
            </Grid>
            <Grid item xs={2}>
              <Checkbox value="g" onChange={this.handleCheck} />
              <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/8/88/G.svg" alt="green_mana" style={manaSymbolStyle}/> &nbsp;
            </Grid>
          </Grid>  
          <Grid container item xs={2}>
            <Grid item xs={2}>
              <FormControl>
                <InputLabel shrink id="label">Card Type</InputLabel>
                <Select labelId="label" id="select" value="" fullWidth onChange={this.handleSelect}>
                  <MenuItem value="artifact">Artifact</MenuItem>
                  <MenuItem value="creature">Creature</MenuItem>
                  <MenuItem value="enchantment">Enchantment</MenuItem>
                  <MenuItem value="instant">Instant</MenuItem>
                  <MenuItem value="sorcery">Sorcery</MenuItem>
                  <MenuItem value="planeswalker">Planeswalker</MenuItem>
                  <MenuItem value="land">Land</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>     
        </Grid>
      </form>
    )
  }
}

export default connect(mapStateToProps)(Search);