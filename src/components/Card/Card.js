import React, { Component } from 'react';
import './Card.css';


export default class Card extends Component {
    constructor(props) {
      super(props);

      this.handleOnCLick = this.handleOnCLick.bind(this)
    }

    handleOnCLick(e) {
        if (e.target.name === "decklistAdd") {
            this.props.getCardInfo(this.props.info);
        } 
        else if (e.target.name ==="maybeboardAdd") { 
            this.props.getCardInfoMaybe(this.props.info);
        }
    }
    
    render() {
        let {info} = this.props; 

        return (
            <div className="container">
                <img draggable={false}
                    src={info.image_uris.small}
                />
                <button className="btn" name="decklistAdd" onClick={this.handleOnCLick}>Add To Decklist</button>
                <button className="btn2" name="maybeboardAdd" onClick={this.handleOnCLick}>Add To Maybeboard</button>
            </div>
        )


    }   
  }

  