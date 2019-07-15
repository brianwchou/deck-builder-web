import React, {  Dispatch } from 'react'
import { connect } from 'react-redux';
import { filteredSearchURL } from '../../common/URLs';
import { getCardSearchData } from '../../actions/SearchActions';
import './Search.css';

const manaSymbolStyle = {
    maxWidth: "15px",
    maxHeight: "15px",
}

interface SearchState {
    textbox: string,
    filterColors: string,
    cardType: string
}

interface SearchProps {
    dispatch: Dispatch<any>
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

    getCards = (e: any) => {
      e.preventDefault();
      var searchCardNameURL: string = filteredSearchURL + this.state.textbox
    
      searchCardNameURL += (this.state.cardType) ? `+t:${this.state.cardType}` : ""

      searchCardNameURL += (this.state.filterColors) ? `+c:${this.state.filterColors}` : ""

      searchCardNameURL += "&unique";

      this.props.dispatch(getCardSearchData(searchCardNameURL));
    }

    handleCheck = (e: any) => {
        let color = e.target.value
        let { filterColors } = this.state
        
        if (filterColors.includes(color)) {
            let newfilterColors = filterColors.replace(color, "")
            this.setState({ filterColors: newfilterColors })
        } else {
            this.setState({ filterColors: filterColors.concat(e.target.value) })
        }
    }

    onSearchTextChange = (e: any) => {
        this.setState({ textbox: e.target.value })
    }

    handleSelect = (e: any) => {
        this.setState({ cardType: e.target.value })
    }

    render() {
      return (
        <form onSubmit={this.getCards}>
          <input className="field" type="text" onChange={this.onSearchTextChange}/>
          <button className="submitbutton" type="submit"> submit </button>
          <br/>

          <input type="checkbox" onClick={this.handleCheck} value="w"></input> 
          <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/8/8e/W.svg" alt="white_mana" style={manaSymbolStyle}/> &nbsp;

          <input type="checkbox" onClick={this.handleCheck} value="u"></input>
          <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/9/9f/U.svg" alt="blue_mana" style={manaSymbolStyle}/> &nbsp;
          
          <input type="checkbox" onClick={this.handleCheck} value="b"></input>
          <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/2/2f/B.svg" alt="black_mana" style={manaSymbolStyle}/> &nbsp;
          
          <input type="checkbox" onClick={this.handleCheck} value="r"></input>
          <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/8/87/R.svg" alt="red_mana" style={manaSymbolStyle}/> &nbsp;
          
          <input type="checkbox" onClick={this.handleCheck} value="g"></input>
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

export default connect()(Search)