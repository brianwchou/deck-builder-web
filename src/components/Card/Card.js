import React, { Component } from 'react';
import './Card.css';


export default class Card extends Component {
    constructor(props) {
      super(props);

      this.handleOnCLick = this.handleOnCLick.bind(this)
    }

    handleOnCLick(e) {
        this.props.getCardInfo(this.props.info, e.target.name);
    }
    
    render() {
        let {info} = this.props; 

        return (
            <div className="container">
                <img draggable={false}
                    src={info.image_uris.small}
                    alt={info.name}
                />
                <button className="btn" name="add" onClick={this.handleOnCLick}>Add To Decklist</button>
                <button className="btn2" name="other" onClick={this.handleOnCLick}>{this.props.buttonDisplay}</button>
            </div>
        )


    }   
  }

  