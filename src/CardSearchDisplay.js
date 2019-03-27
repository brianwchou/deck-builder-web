import React from 'react';
import Card from './components/Card';

export default class CardSearchDisplay extends React.Component {

    render() {
        var cards  = this.props.cards.map((url, index) => {
            return <Card url={url} key={index} />
        });

        return(
            <div>
                {cards}
            </div>
        )
    }
}