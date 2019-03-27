import React from 'react'
import './graphs.css'
import Line from './Line'
import Xaxis from './Xaxis'
import Bar from './Bar'

export default class Graph extends React.Component {
    state = {
        
    }

    renderLines() {
        return Array(10).fill(null).map((el, i) => (
            <Line
                top={i * 10}
                key={i}
            />
        ))
    }

    renderBars() {
        const { manacurve } = this.props;

        let sumOfAll = manacurve.reduce((acc, cost) => {
            return acc + cost.numberOfCards;
        }, 0);

        return manacurve.map((cost) => {
            const percent = (cost.numberOfCards / sumOfAll) * 100;
            return (
                <Bar
                    percent={percent}
                    key={cost.cmc}
                />
            )
        })
    }


    render() {
        return (
            <div className="graph-wrapper">
                
                <div className="graph">

                    <div className="bar-lines-container">
                        {this.renderLines()}
                        {this.renderBars()}
                    </div>
                    <Xaxis manacurve={this.props.manacurve} />

                </div>

            </div>
        )
    }
}
