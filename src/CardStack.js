import React from 'react';
import Card from './components/Card';

const CardStackStyle = {
    display: 'inline-block',
    width: '176px',
    minHeight: '100px',
    maxHeight: '50vh',
    border: '1px solid black',
    overflow: 'hidden'
}

export default class CardStack extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // multiples of 185 pixels for small
        var cards = this.props.cards.map((url, index) => {
            return <Card url={url} key={index} style={{transform: `translateY(-${185 * index}px)`}} />
        });

        return(
            <div style={CardStackStyle}>
                {cards}
            </div>
        )
    }
}