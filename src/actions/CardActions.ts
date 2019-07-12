import { CardInfo } from '../common/types';
import { Dispatch, Reducer } from 'react';
import { AnyAction, Middleware } from 'redux';


export const CARD_COUNT = {
    INCREMENT: 'CARD_COUNT_INCREMENT',
    ADD: 'CARD_COUNT_ADD',
    DECREMENT: 'CARD_COUNT_DECREMENT',
    REMOVE: 'CARD_COUNT_REMOVE'
}

export const DECKLIST = {
    ADD: 'DECKLIST_ADD',
    REMOVE: 'DECKLIST_REMOVE',
}

export const MAYBEBOARD = {
    ADD: "MAYBEBOARD_ADD",
    REMOVE: "MAYBEBOARD_REMOVE",
}

export const addToDeckList = (cardInfo: CardInfo) => {
    return (dispatch: Dispatch<AnyAction>, getState: any) => {
        const state = getState();
        if (state.deckList.main.includes(cardInfo)) {
            dispatch({
                type: CARD_COUNT.INCREMENT, 
                name: cardInfo.name
            })
        } else {
            dispatch({
                type: DECKLIST.ADD, 
                card: cardInfo
            });
            dispatch({
                type: CARD_COUNT.ADD, 
                name: cardInfo.name
            })
        }
    }
}

export const removeFromDeckList = (cardInfo: CardInfo) => {
    return (dispatch: Dispatch<AnyAction>) => {
            dispatch({
                type: DECKLIST.REMOVE, 
                card: cardInfo
             });
            dispatch({
                type: CARD_COUNT.REMOVE, 
                name: cardInfo.name
            })
    }
}

export const moveToMaybe = (cardInfo: CardInfo) => {
    return (dispatch: Dispatch<Reducer<any, AnyAction>>) => {
        dispatch(addToMaybe(cardInfo))
        dispatch(removeFromDeckList(cardInfo))
    }
}

// card count actions
export const incrementCardCount = (cardInfo: CardInfo) => {
    return {
        type: CARD_COUNT.INCREMENT, 
        name: cardInfo.name
    }
}

export const decrementCardCount = (cardInfo: CardInfo) => {
    return (dispatch: any, getState: any) => {   
        const state = getState();
        if (state.cardCount.counts[cardInfo.name] === 1) {
            dispatch(removeFromDeckList(cardInfo));
        } else {
            dispatch({type: CARD_COUNT.DECREMENT, name: cardInfo.name});
        }
    }
}

export const addToMaybe = (cardInfo: CardInfo) => {
    return (dispatch: Dispatch<AnyAction>, getState: any) => {
        const state = getState();
        if (!state.maybeBoard.cards.includes(cardInfo)) {
            dispatch({type: MAYBEBOARD.ADD, card: cardInfo});
        }
    }
}

export const deleteFromMaybe = (cardInfo: CardInfo) => {
    return {
        type: MAYBEBOARD.REMOVE,
        card: cardInfo
    }
}