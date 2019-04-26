import React, { Component } from 'react';
import './buttons.css'

const cardStyle = {
    display: 'flex'
}

export default class Card extends Component {
    constructor(props) {
      super(props);

      this.handleOnCLick = this.handleOnCLick.bind(this)
      this.handleOnCLick2 = this.handleOnCLick2.bind(this)
    }

    handleOnCLick(e) {
        this.props.getCardInfo(this.props.info);
    }

    handleOnCLick2(e) {
        this.props.getCardInfoMaybe(this.props.info);
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
                        <button class="btn" onClick={this.handleOnCLick}>Add To Decklist</button>
                        <button class="btn2" onClick={this.handleOnCLick2}>Butto2</button>
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

  