import React from 'react'
import './graphs.css'
import Line from './Line'
import Xaxis from './Xaxis'
import Bar from './Bar'

export default function Graph({manacurve}) {
    /*
        This value comes from DeckBuidler
        where do we process data for manacurve?
        manacurve: [{
            cmc: integer,
            numberOfCards: integer
        }...]
    */
    const renderLines= () => {
        return Array(10).fill(null).map((el, i) => (
            <Line
                top={i * 10}
                key={i}
            />
        ))
    }

    const renderBars = () => {
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

    return (
        <div className="graph-wrapper">
            <div className="graph">
                <div className="bar-lines-container">
                    {renderLines()}
                    {renderBars()}
                </div>
                <Xaxis manacurve={manacurve} />
            </div>
        </div>
    )
}
