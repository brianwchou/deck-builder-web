import React from 'react'

const Bar = ({ percent }) => {
    return (
        <div className="bar" style={{ height: `${percent}%`}} />
    )
}

export default Bar