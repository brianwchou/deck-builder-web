import React from 'react'

type BarProps = { percent: number }

const Bar = (props: BarProps) => 
    <div className="bar" style={{ height: `${props.percent}%`}} />

export default Bar