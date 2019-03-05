import React, { Component } from 'react';
import styled from 'styled-components';
import { fuzzySearchURL } from './URLs';
import './App.css';

class Card extends Component {
  constructor(props) {
    super(props)

    this.handleOnDragStart = this.handleOnDragStart.bind(this);
  }

  handleOnDragStart(e) {
    let {url} = this.props;
    e.dataTransfer.setData("text/plain", url);
  }

  render() {
    let {url} = this.props;
    return (
        <img draggable={true} 
          src={url}
          onDragStart={this.handleOnDragStart}      
        />
    )
  }
}

const cardBoxStyle = {
  border: 'solid black thin',
  width: '100vw',
  minHeight: '50vh',
}

class CardBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }

    this.drop = this.drop.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
  }

  drop(e) {
    e.preventDefault();
    var item = e.dataTransfer.getData("text/plain");
    this.state.cards.push(item);
    this.setState({ ...this.state.cards });
  }

  onDragOver(e) {
    e.preventDefault();
    console.log('you are dragging over me');
  }

  render() {
    let cards = this.state.cards.map((url, index) => {
      return <Card url={url} key={index} />
    })

    return(
      <div style={cardBoxStyle} 
        onDrop={this.drop} 
        onDragOver={this.onDragOver}>
        {cards}
      </div>
    )
  }
}

class Search extends Component {
  constructor() {
    super();

    this.state = {
      cardURLs: [],
      searchCardName: "",
      insideCardBox: []
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
      console.log(json)
      cardURL = (json !== null) ? json.image_uris.small : null;
    });

    console.log(cardURL);
    if (cardURL !== null ) {
      this.state.cardURLs.push(cardURL);
      this.setState({ ...this.state.cardURLs });
    }
  }

  clear() { this.setState({cardURLs: []}) }

  render() {
    var cards = this.state.cardURLs.map((url, index) => {
      return <Card key={index} url={url} />
    });

    return (
      <div>
        <form onSubmit={this.getCard} >
          <input type="text" onChange={this.onCardNameChange}/>
          <button type="submit"> submit </button>
          <button type="button" onClick={this.clear}> clear </button>
        </form>
        {cards}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <CardBox>
        </CardBox>
      </div>
    );
  }
}

export default App;