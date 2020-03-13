import React, {  Dispatch } from 'react'
import { connect } from 'react-redux';
import { filteredSearchURL } from '../../common/URLs';
import { getCardSearchData } from '../../actions/SearchActions';
import './Search.css';
import { Error } from '../../components/Error/Error';
import { Button, TextField, Checkbox, Select, MenuItem, InputLabel, FormControl, Grid } from '@material-ui/core';

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
  // <button className="submitbutton" type="submit"> search </button>
  render() {
    return (
      <Grid container>
        <form onSubmit={this.getCards}>
          <Grid item xs={10}>
            <TextField id="standard-basic" onChange={this.onSearchTextChange}/>
          </Grid>
          <Grid item xs={2}>
            <Button size="small" variant="contained" type="submit">search</Button> 
          </Grid>
          
          <br/>
          
          {this.props.error && <Error errorMessage="no results, try again"/>}
          
          <Checkbox value="w" onChange={this.handleCheck} />
          <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/8/8e/W.svg" alt="white_mana" style={manaSymbolStyle}/> &nbsp;

          <Checkbox value="u" onChange={this.handleCheck} />
          <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/9/9f/U.svg" alt="blue_mana" style={manaSymbolStyle}/> &nbsp;
          
          <Checkbox value="b" onChange={this.handleCheck} />
          <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/2/2f/B.svg" alt="black_mana" style={manaSymbolStyle}/> &nbsp;
          
          <Checkbox value="r" onChange={this.handleCheck} />
          <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/8/87/R.svg" alt="red_mana" style={manaSymbolStyle}/> &nbsp;
          
          <Checkbox value="g" onChange={this.handleCheck} />
          <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/8/88/G.svg" alt="green_mana" style={manaSymbolStyle}/> &nbsp;
          
          <FormControl>
            <InputLabel id="label">Card Type</InputLabel>
            <Select labelId="label" id="select" value="" onChange={this.handleSelect}>
              <MenuItem value="artifact">Artifact</MenuItem>
              <MenuItem value="creature">Creature</MenuItem>
              <MenuItem value="enchantment">Enchantment</MenuItem>
              <MenuItem value="instant">Instant</MenuItem>
              <MenuItem value="sorcery">Sorcery</MenuItem>
              <MenuItem value="planeswalker">Planeswalker</MenuItem>
              <MenuItem value="land">Land</MenuItem>
            </Select>
          </FormControl>
        </form>
      </Grid>
      
    )
  }
}

export default connect(mapStateToProps)(Search);