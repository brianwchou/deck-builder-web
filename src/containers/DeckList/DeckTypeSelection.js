import React from 'react'

export default function DeckTypeSelection() {
    return (
        <select>
            <option value="standard">Standard</option>
            <option value="modern">Modern</option>
            <option value="legacy">Legacy</option>
            <option value="vintage">Vintage</option>
            <option value="commander">Commander</option>
            <option value="other">Other</option>
        </select>
    )
} 
