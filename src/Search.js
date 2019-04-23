import React from 'react'
import { filteredSearchURL } from './utility/URLs';
import { connect } from 'react-redux';
import { getCardSearchData } from './actions/searchActions';
import "./App.css";

const manaSymbolStyle = {
    maxWidth: "15px",
    maxHeight: "15px",
}

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            textbox: "",
            filterColors: "",
            cardData: []
        }
        this.getCard = this.getCard.bind(this);
    }

    getCard = (e) => {
      e.preventDefault();
      var searchCardNameURL 
    
      if (!this.state.filterColors) {
        searchCardNameURL = filteredSearchURL + this.state.textbox + "&unique"
      } else {
        searchCardNameURL = filteredSearchURL + this.state.textbox + "+c:" +  this.state.filterColors + "&unique";
      }

      this.props.dispatch(getCardSearchData(searchCardNameURL));
    }

    handleCheck = (e) => {
        let color = e.target.value
        let { filterColors } = this.state
        
        if (filterColors.includes(color)) {
            let newfilterColors = filterColors.replace(color, "")
            this.setState({ filterColors: newfilterColors })
        } else {
            this.setState({ filterColors: filterColors.concat(e.target.value) })
        }
    }

    onSearchTextChange = (e) => {
        this.setState({ textbox: e.target.value })
    }

    render() {
      return (
        <>
          <form onSubmit={this.getCard}>
            <input className="field" type="text" onChange={this.onSearchTextChange}/>
            <button className="submitbutton" type="submit"> submit </button>
            <br/>

            Card Color: &nbsp;
            <input type="checkbox" onClick={this.handleCheck} name="color1" value="w"></input> 
            <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/8/8e/W.svg" alt="white_mana" style={manaSymbolStyle}/>White &nbsp;

            <input type="checkbox" onClick={this.handleCheck} name="color2" value="u"></input>
            <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/9/9f/U.svg" alt="blue_mana" style={manaSymbolStyle}/>Blue &nbsp;
            
            <input type="checkbox" onClick={this.handleCheck} name="color3" value="b"></input>
            <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/2/2f/B.svg" alt="black_mana" style={manaSymbolStyle}/>Black &nbsp;
            
            <input type="checkbox" onClick={this.handleCheck} name="color4" value="r"></input>
            <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/8/87/R.svg" alt="red_mana" style={manaSymbolStyle}/>Red &nbsp;
            
            <input type="checkbox" onClick={this.handleCheck} name="color5" value="g"></input>
            <img src="https://gamepedia.cursecdn.com/mtgsalvation_gamepedia/8/88/G.svg" alt="green_mana" style={manaSymbolStyle}/>Green 

            <br/>

            Card Type: &nbsp;
            <select>
                <option value="artifact">Artifact</option>
                <option value="creature">Creature</option>
                <option value="enchantment">Enchantment</option>
                <option value="instant">Instant</option>
                <option value="sorcery">Sorcery</option>
                <option value="planeswalker">Planeswalker</option>
                <option value="land">Land</option>
            </select>
          </form>
        </>
      )
    }
}

export default connect()(Search)