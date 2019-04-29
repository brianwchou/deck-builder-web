import React from 'react';
import Graph from './Graph'

const metricsStyle = {
    border: 'solid black thin',
    width: '35vw',
    height: '30vh',
    display: 'inline-block'
}

class Metrics extends React.Component {
    render() {
        return (
            <div style={metricsStyle}>
                <Graph manacurve={this.props.manacurve} />
            </div>
        )
    }
}

export default Metrics