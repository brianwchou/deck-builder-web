import React from 'react'

const Xaxis = ({ manacurve }) => {
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