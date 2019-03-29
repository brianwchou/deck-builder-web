import React, {Component} from 'react';

const cardStyle = {
    display: 'block-inline'
}

export default class Card extends Component {
    constructor(props) {
      super(props);
      this.handleOnDragStart = this.handleOnDragStart.bind(this);
      this.handleOnCLick = this.handleOnCLick.bind(this)
    }

    handleOnDragStart(e) {
        let {url} = this.props;
        e.dataTransfer.setData("text/plain", url);
    }

    handleOnCLick(e) {
        console.log(this.props.info.name)
    }

    render() {
        let {info, style} = this.props; 
        style = {...style, ...cardStyle}
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