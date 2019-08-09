import React from 'react'
import './graphs.css'

type LineProps = {
    top: number,
    key: number
}

const Line = ({ top }: LineProps) => 
    <div className="line" style={{ top: `${top}%` }} />

export default Line