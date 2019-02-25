import React, {Component} from 'react';
import { fuzzySearchURL } from './URLs';

// card should not create itself
class Card extends Component {
  render() {
    return(
      <img src={this.props.url} />
    )
  }
}

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      cardURLs: [],
      searchCardName: ""
    };

    this.getCard = this.getCard.bind(this);
    this.clear = this.clear.bind(this);
    this.onCardNameChange = this.onCardNameChange.bind(this);
  }
  
  onCardNameChange(e) {
    this.setState({searchCardName: e.target.value})
  }

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
    });

    console.log(cardURL);
    this.state.cardURLs.push(cardURL);
    this.setState({ ...this.state.cardURLs });
  }

  clear() { this.setState({cardURLs: []}) }

  render() {
    var cards = this.state.cardURLs.map((url, index) => {
      return <Card key={index} url={url} />
    });

    return (
      <div>
        <button type="button" onClick={this.clear}> clear </button>
        <form onSubmit={this.getCard} >
          <input type="text" onChange={this.onCardNameChange}/>
          <button type="submit"> submit </button>
        </form>
        {cards}  
      </div>
    )
  }
}