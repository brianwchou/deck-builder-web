import React from 'react';
import Graph from './Graph'

const metricsStyle = {
    border: 'solid black thin',
    width: '35vw',
    height: '30vh',
    display: 'inline-block'
}

function Metrics ({ main, counts }) {

    const check = (i, graphInput) => {
        for (let j = 0; j < graphInput.length; j++) {
            if (main[i].cmc === graphInput[j].cmc) {
                return true
            }
        }
        return false
    }

    const metrics = () => {
        var graphInput = [];

        for (let i = 0; i < main.length; i++) {
            if (!check(i, graphInput)) {
                var newObj = {
                    cmc: main[i].cmc,
                    count: counts[main[i].name]
                }
                graphInput.push(newObj)
            }

            else {
                for (let k = 0; k < graphInput.length; k++) {
                    if (main[i].cmc === graphInput[k].cmc) {
                        graphInput[k].count += counts[main[i].name]
                    }
                }
            }
        }
        return graphInput.sort((a, b) => a.cmc - b.cmc);
    }

    return (
        <div style={metricsStyle}>
            <Graph metrics={metrics()} />
        </div>
    )
}

export default Metrics