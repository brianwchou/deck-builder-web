import React from 'react'
import './graphs.css'

interface LineProps {
    top: number,
    key: number
}

const Line = ({ top }: LineProps) => 
    <div className="line" style={{ top: `${top}%` }} />

export default Line