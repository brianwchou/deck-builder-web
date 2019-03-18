import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fuzzySearchURL } from './utility/URLs';

class Search extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        searchCardName: "",
      };
  
      this.getCard = this.getCard.bind(this);
      this.clear = this.clear.bind(this);
      this.onCardNameChange = this.onCardNameChange.bind(this);
    }
    
    onCardNameChange(e) {
        this.setState({searchCardName: e.target.value})
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
          <form onSubmit={this.getCard} >
            <input type="text" onChange={this.onCardNameChange}/>
            <button type="submit"> submit </button>
            <button type="button" onClick={this.clear}> clear </button>
          </form>
        </div>
      )
    }
  }
  
  export default connect()(Search)