import React, {Component} from 'react';
import { fuzzySearchURL } from './URLs';
import ReactDOM from 'react-dom';
import './App.css';

const cardBoxStyle = {
  border: 'solid black thin',
  width: '100vw',
  height: '50vh',
}

class CardBox extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div style={cardBoxStyle} >
        dummy text
      </div>
    )
  }
}

class Card extends Component {
  render() {
    return(
      <DraggableContainer>
        <img draggable={false} src={this.props.url} />
      </DraggableContainer>
    )
  }
}

class DraggableContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dragging: false,
      pos: {x: 0, y:0},
      rel: null
    };

    this.onDrag = this.onDrag.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  componentDidUpdate() {
    if (this.state.dragging) {
      document.addEventListener('onDrag', this.onDrag)
      document.addEventListener('onDragEnd', this.onDragEnd)
    } else if (!this.state.dragging) {
      document.removeEventListener('onDrag', this.onDrag)
      document.removeEventListener('onDragEnd', this.onDragEnd)
    }
  }

  onDragStart(e) {
    var pos = ReactDOM.findDOMNode(this);
    this.setState({
      dragging: true,
      rel: {
        x: e.pageX - pos.offsetLeft,
        y: e.pageY - pos.offsetTop
      }
    })
    e.dataTransfer.setData()
    e.dataTransfer.setDragImage()
    e.stopPropagation()
  }

  onDragEnd(e) {
    this.setState({
      dragging: false,
      pos: {
        x: e.pageX - this.state.rel.x,
        y: e.pageY - this.state.rel.y
      }
    })
    
    e.preventDefault()
    e.stopPropagation()
  }

  onDrag(e) {
    this.setState({
      pos: {
        x: e.pageX - this.state.rel.x,
        y: e.pageY - this.state.rel.y
      }
    })

    e.preventDefault()
    e.stopPropagation()
  }

  render() {
    return(
      <div className={'my-draggable'} 
        draggable={true}
        style={{position: 'absolute',
                left: this.state.pos.x + 'px',
                top: this.state.pos.y + 'px'}} 
        onDrag={this.onDrag}
        onDragEnd={this.onDragEnd}
        onDragStart={this.onDragStart}
        >
        
        {this.props.children}
      </div>
    )
  }
}

export default class Search extends Component {
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
        <button type="button" onClick={this.clear}> clear </button>
        <form onSubmit={this.getCard} >
          <input type="text" onChange={this.onCardNameChange}/>
          <button type="submit"> submit </button>
        </form>
        {cards}
        <Card url={'https://img.scryfall.com/cards/small/en/ima/128.jpg?1530592214'} />
        <CardBox>

        </CardBox>
      </div>
    )
  }
}