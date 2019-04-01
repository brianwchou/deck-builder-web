import React from 'react'
import { filteredSearchURL } from './utility/URLs';
import { connect } from 'react-redux';
import CardDisplay from './CardDisplay';
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
        this.clear = this.clear.bind(this);
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

    async getCard(e) {
      e.preventDefault();
      
      var searchCardNameURL = filteredSearchURL + this.state.textbox + "+c:" +  this.state.filterColors + "&unique.cardData";

      if (!this.state.filterColors) {
        searchCardNameURL = filteredSearchURL + this.state.textbox + "&unique.cardData"
      }

      await fetch(searchCardNameURL)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                console.log("response", response.status)
                return null;
            }
        })
        .then( (json) => {
          console.log(json)
          if (json) {
            // this doesnt work when the cards are double faced
            var cardURL = json.data.map((info)=> {
              return {
                artist: info.artist,
                cmc: info.cmc,
                color_identity: info.color_identity,
                colors: info.colors,
                image_uris: info.image_uris,
                mana_cost: info.mana_cost,
                name: info.name,
                oracle_text: info.oracle_text,
                power: info.power,
                rarity: info.rarity,
                reserved: info.reserved,
                setName: info.setName,
                toughness: info.toughness,
                type_line: info.type_line,
              }
            })
            this.setState({ cardData: cardURL })
          }
        });
    }

    clear = () => {
        this.setState({
          cardData: [],
          textbox: "",
        })
    }    

    render() {
      return (
        <>
          <form onSubmit={this.getCard}>
            <input className="field" type="text" onChange={this.onSearchTextChange}/>
            <button className="submitbutton" type="submit"> submit </button>
            <button className="clearbutton" type="button" onClick={this.clear}> clear </button>
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
          <CardDisplay data={this.state.cardData}/>
        </>
      )
    }
}

export default connect()(Search)