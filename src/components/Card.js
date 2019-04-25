import React, { Component } from 'react';

const cardStyle = {
    display: 'block-inline'
}

export default class Card extends Component {
    constructor(props) {
      super(props);

      this.handleOnCLick = this.handleOnCLick.bind(this)
    }

    handleOnCLick(e) {
        this.props.getCardInfo(this.props.info);
    }
    
    render() {
        let {info, style} = this.props; 
        style = {...style, ...cardStyle}

        // dyanamic props
        switch(this.props.type) {
            case "Clickable":
                return (
                    <img draggable={false}
                        onClick={this.handleOnCLick}
                        src={info.image_uris.small}
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

  