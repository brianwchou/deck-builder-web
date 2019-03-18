import React, {Component} from 'react';

const cardStyle = {
    display: 'inline-block',
}

export default class Card extends Component {
    constructor(props) {
      super(props);
      this.handleOnDragStart = this.handleOnDragStart.bind(this);
    }
  
    handleOnDragStart(e) {
        let {url} = this.props;
        e.dataTransfer.setData("text/plain", url);
    }

    render() {
        let {url, style} = this.props; 
        style = {...style, ...cardStyle}

        return (
            <img draggable={true}
                data-url={url} 
                src={url}
                style={style}
                onDragStart={this.handleOnDragStart}      
            />
        )
    }
  }