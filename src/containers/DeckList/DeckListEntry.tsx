import React from 'react';
import { CardInfo } from '../../common/types';
import { Button, Grid } from '@material-ui/core';

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
        <Grid container key={index}>
          <div>
            {count}x 
            <Button color="primary" onClick={handleOnClick} name={'increment'}>+</Button>
            </div>
            <div>
            {card.name} 
            <Button color="primary" onClick={handleOnClick} name={'decrement'}>-</Button>
            <Button color="primary" onClick={handleOnClick} name={'maybe'}>maybe</Button>
          </div>        
        </Grid>
    )
}