import React from 'react';
import { CardInfo } from '../../common/types';

type DeckListEntryProps = {
    index: number,
    card: CardInfo,
    count: number,
    getCardInfo(card: CardInfo, name: string): void   
}

export default function DeckListEntry ({index, card, count, getCardInfo}: DeckListEntryProps) {
    const handleOnClick = (e: any) => {
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