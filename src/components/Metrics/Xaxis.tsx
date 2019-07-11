import React from 'react'

interface CMCMetric {
    cmc: number,
    count: number
}

interface XaxisProps {
    manacurve: Array<CMCMetric>
}

const Xaxis = ({ manacurve }: XaxisProps) => {
  Array(11).fill(null);

  return (
    <div className="xaxis">
      {
        manacurve.map((cost) => (
          <div className="label" key={cost.cmc}>
            {cost.cmc}
          </div>
        ))
      }
    </div>
  )
}

export default Xaxis