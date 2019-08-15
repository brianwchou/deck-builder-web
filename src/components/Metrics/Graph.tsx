import React from 'react'
import './graphs.css'
import Line from './Line'
import Xaxis from './Xaxis'
import Bar from './Bar'

interface CMCMetric {
    cmc: number,
    count: number
}

type GraphProps = {
    metrics: Array<CMCMetric>
}

export default function Graph({metrics}: GraphProps) {
    // this sets up the horizontal lines
    const renderLines= () => {
        return Array(10).fill(null).map((el, i) => (
            <Line
                top={i * 10}
                key={i}
            />
        ))
    }

    // sets up the vertical bars
    const renderBars = () => {
        let sumOfAll = metrics.reduce((acc: number, cost: CMCMetric) => {
            return acc + cost.count;
        }, 0);

        return metrics.map((cost, index) => {
            const percent = (cost.count / sumOfAll) * 100;
            return (
                <Bar
                    percent={percent}
                    key={index}
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
                <Xaxis manacurve={metrics} />
            </div>
        </div>
    )
}
