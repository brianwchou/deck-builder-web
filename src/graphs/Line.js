import React from 'react'
import './graphs.css'

const Line = ({ top} ) => {
    return (
        <div 
            className="line"
            style={{ top: `${top}%`}}
        />
    )
}

export default Line