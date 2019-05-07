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

export const addToDeckList = (cardInfo) => {
    return (dispatch, getState) => {
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

export const removeFromDeckList = (cardInfo) => {
    return (dispatch) => {
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

export const moveToMaybe = (cardInfo) => {
    return (dispatch) => {
        dispatch(addToMaybe(cardInfo))
        dispatch(removeFromDeckList(cardInfo))
    }
}

// card count actions
export const incrementCardCount = (cardInfo) => {
    return {
        type: CARD_COUNT.INCREMENT, 
        name: cardInfo.name
    }
}

export const decrementCardCount = (cardInfo) => {
    return (dispatch, getState) => {   
        const state = getState();
        if (state.cardCount.counts[cardInfo.name] === 1) {
            dispatch(removeFromDeckList(cardInfo));
        } else {
            dispatch({type: CARD_COUNT.DECREMENT, name: cardInfo.name});
        }
    }
}

export const addToMaybe = (cardInfo) => {
    return (dispatch, getState) => {
        const state = getState();
        if (!state.maybeBoard.cards.includes(cardInfo)) {
            dispatch({type: MAYBEBOARD.ADD, card: cardInfo});
        }
    }
}

export const deleteFromMaybe = (cardInfo) => {
    return {
        type: MAYBEBOARD.REMOVE,
        card: cardInfo
    }
}