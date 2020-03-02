import React, {  Dispatch } from 'react'
import { connect } from 'react-redux';
import { filteredSearchURL } from '../../common/URLs';
import { getCardSearchData } from '../../actions/SearchActions';
import './Search.css';
import { Error } from '../../components/Error/Error';
import { Button } from 'semantic-ui-react';

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
  return {error: searchDisplay.error};
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

  handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ cardType: e.target.value });
  }
  // <button className="submitbutton" type="submit"> search </button>
  render() {
    return (
      <form onSubmit={this.getCards}>
        <input className="field" type="text" onChange={this.onSearchTextChange}/>

        <Button type="submit">search</Button> 
        
        <br/>
        
        {this.props.error && <Error errorMessage="no results, try again"/>}
        
        <input type="checkbox" onChange={this.handleCheck} value="w"></input> 
        <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/8/8e/W.svg" alt="white_mana" style={manaSymbolStyle}/> &nbsp;

        <input type="checkbox" onChange={this.handleCheck} value="u"></input>
        <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/9/9f/U.svg" alt="blue_mana" style={manaSymbolStyle}/> &nbsp;
        
        <input type="checkbox" onChange={this.handleCheck} value="b"></input>
        <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/2/2f/B.svg" alt="black_mana" style={manaSymbolStyle}/> &nbsp;
        
        <input type="checkbox" onChange={this.handleCheck} value="r"></input>
        <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/8/87/R.svg" alt="red_mana" style={manaSymbolStyle}/> &nbsp;
        
        <input type="checkbox" onChange={this.handleCheck} value="g"></input>
        <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/8/88/G.svg" alt="green_mana" style={manaSymbolStyle}/> &nbsp;
        <select onChange={this.handleSelect}>
          <option value="">Choose A Card Type</option>
          <option value="artifact">Artifact</option>
          <option value="creature">Creature</option>
          <option value="enchantment">Enchantment</option>
          <option value="instant">Instant</option>
          <option value="sorcery">Sorcery</option>
          <option value="planeswalker">Planeswalker</option>
          <option value="land">Land</option>
        </select>

      </form>
    )
  }
}

export default connect(mapStateToProps)(Search);