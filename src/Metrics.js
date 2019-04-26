import React from 'react';
import Graph from './graphs/Graph'


const metricsStyle = {
    border: 'solid black thin',
    width: '35vw',
    height: '30vh',
    display: 'inline-block'
}

class Metrics extends React.Component {
    state = {
      manacurve: [
        {
            cmc: 0,
            numberOfCards: 2
        },
        {
            cmc: 1,
            numberOfCards: 8
        },
        {
            cmc: 2,
            numberOfCards: 10
        },
        {
            cmc: 3,
            numberOfCards: 12
        },
        {
            cmc: 4,
            numberOfCards: 10
        },
        {
            cmc: 5,
            numberOfCards: 8
        },
        {
            cmc: 6,
            numberOfCards: 5
        }
    ]
      }


    render() {

        return (
            <div style={metricsStyle}>
                <Graph
                  manacurve={this.state.manacurve}
                />
            </div>
        )
    }
}

export default Metrics