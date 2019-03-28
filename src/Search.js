import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fuzzySearchURL } from './utility/URLs';
import "./App.css";

const manaSymbolStyle = {
  maxWidth: "15px",
  maxHeight: "15px",
}

const mapStateToProps = (state) => {
  return {urls: state.urls}
}

class Search extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        textbox:"",
        searchCardName: "",
      };
  
      this.getCard = this.getCard.bind(this);
      this.clear = this.clear.bind(this);
      this.onCardNameChange = this.onCardNameChange.bind(this);
    }
    
    onCardNameChange(e) {
        this.setState({searchCardName: e.target.value})
    }

    handleCheck = (e) => {
      let color = e.target.value
      let filterColor = this.state.filterColor
      var newFilterColor = ""
      
      if (filterColor.includes(color)) {
          newFilterColor = filterColor.replace(color,"")
          this.setState ( {filterColor: newFilterColor} )
          console.log(this.state.filterColor)
      }
      if (!filterColor.includes(color)) {
          this.setState( {filterColor: filterColor.concat(e.target.value)} )
          console.log(this.state.filterColor)
      }
  }

    // needs to dispatch actions
    async getCard(e) {
      e.preventDefault();
      var cardURL;
      var searchCardNameURL = fuzzySearchURL + this.state.searchCardName;
      console.log(searchCardNameURL);
  
      await fetch(searchCardNameURL)
      .then( response => {
        if (response.status === 200) {
          return response.json();
        } else {
          console.log("response", response.status)
          return null;
        }
      })
      .then((json) => {
        cardURL = (json !== null) ? json.image_uris.small : null;
        console.log(cardURL)
      });
  
      if (cardURL !== null ) {
        this.props.dispatch({
            type: 'UPDATE_URL_STORE',
            stackNo: 1,
            url: cardURL
          })
      }
    }

    clear() { 
      this.props.dispatch({type: 'CLEAR_URL_STORE'}) 
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.getCard}>
              <input className="field" type="text" onChange={this.onCardNameChange}/>
              <button className="submitbutton" type="submit"> submit </button>
              <button className="clearbutton" type="button" onClick={this.clear}> clear </button><br/>

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
      </div>
      )
    }
  }
  
  export default connect(mapStateToProps)(Search)