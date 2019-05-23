import React from 'react';

export default function DeckListEntry ({index, card, count, getCardInfo}) {
    const handleOnClick = (e) => {
        getCardInfo(card, e.target.name);
    }

    return (
        <div className="flex alignment" key={index}> 
            <div className="flex count">
                {count}x 
                <button onClick={handleOnClick} name={'increment'}>+</button>
            </div>
            <div className="flex name">
                {card.name} 
                <button onClick={handleOnClick} name={'decrement'}>-</button>
                <button onClick={handleOnClick} name={'maybe'}>maybe</button>
            </div>        
        </div>
    )
}