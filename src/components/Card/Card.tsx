import React, { Component } from 'react';
import './Card.css';
import { CardInfo } from '../../common/types';

export type CardProps = {
    info: CardInfo,
    buttonDisplay: string,
    getCardInfo(info: CardInfo, name: string): void
}

type myState = {
    flipped: boolean
}

export default class Card extends Component<CardProps, myState> {
    constructor(props: CardProps) {
      super(props);
      this.state = {
          flipped: false
      }

      this.handleOnCLick = this.handleOnCLick.bind(this)
    }

    getImageFace = () => this.state.flipped ? this.props.info.image_uris[1].small : this.props.info.image_uris[0].small  

    handleOnCLick(e: any) {
        if (e.target.name === "flip") {
            this.setState(state => ({ flipped: !state.flipped }));
        }
        this.props.getCardInfo(this.props.info, e.target.name);
    }
    render() {
        let {info} = this.props; 

        if (info.layout === "transform") {
            return (
                <div className="container">
                    <img draggable={false}
                        src={this.getImageFace()}
                        alt={info.name}
                    />
                    <button className="btn" name="add" onClick={this.handleOnCLick}>Add To Decklist</button>
                    <button className="btn2" name="other" onClick={this.handleOnCLick}>{this.props.buttonDisplay}</button>
                    <button className="btn3" name="flip" onClick={this.handleOnCLick}>flip</button>
                </div>
            )
        }
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

  