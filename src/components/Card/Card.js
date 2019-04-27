import React, { Component } from 'react';
import './Card.css';

const cardStyle = {
    display: 'flex'
}

export default class Card extends Component {
    constructor(props) {
      super(props);

      this.handleOnCLick = this.handleOnCLick.bind(this)
    }

    handleOnCLick(e) {
        if (e.target.name == "decklistAdd") {
            this.props.getCardInfo(this.props.info);
        } 
        else if (e.target.name =="maybeboardAdd") { 
            this.props.getCardInfoMaybe(this.props.info);
        }
    }
    
    render() {
        let {info, style} = this.props; 
        style = {...style, ...cardStyle}

        // dyanamic props
        switch(this.props.type) {
            case "Clickable":
                return (
                    <div className="container">
                        <img draggable={false}
                            src={info.image_uris.small}
                            style={style}
                        />
                        <button class="btn" name="decklistAdd" onClick={this.handleOnCLick}>Add To Decklist</button>
                        <button class="btn2" name="maybeboardAdd" onClick={this.handleOnCLick}>Butto2</button>
                    </div>
                )

            case "Maybe":
                return (
                    <img src={info.image_uris.small}
                        style={style}
                    />
                )

            default: // draggable
                return (
                    <img draggable={true}
                        src={info.image_uris.small}
                        style={style}
                        onDragStart={this.handleOnDragStart}      
                    />
                )
        }   
    }
  }

  