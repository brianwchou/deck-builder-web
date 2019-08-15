import React from 'react'

interface CMCMetric {
    cmc: number,
    count: number
}

type XaxisProps = {
    manacurve: Array<CMCMetric>
}

const Xaxis = ({ manacurve }: XaxisProps) => {
  Array(11).fill(null);

  return (
    <div className="xaxis">
      {
        manacurve.map((cost, index) => (
          <div className="label" key={index}>
            {cost.cmc}
          </div>
        ))
      }
    </div>
  )
}

export default Xaxis