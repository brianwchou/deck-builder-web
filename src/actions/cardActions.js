export const addToDeckList = (cardInfo) => {
    return (dispatch, getState) => {
        const state = getState();
        if (state.deckList.main.includes(cardInfo)) {
            dispatch({type: 'INCREMENT_CARD_COUNT', name: cardInfo.name})
        } else {
            dispatch({type:'ADD_TO_DECKLIST', card: cardInfo});
        }
    }
}

export const removeFromDeckList = (cardInfo) => {
    return (dispatch) => {
            dispatch({type: 'REMOVE_FROM_CARD_COUNT', name: cardInfo.name})
            dispatch({type:'REMOVE_FROM_DECKLIST', card: cardInfo});
    }
}

export const moveToMaybe = (cardInfo) => {
    return (dispatch) => {
        dispatch(addToMaybe(cardInfo))
        dispatch(removeFromDeckList(cardInfo))
    }
}

export const incrementCardCount = (cardInfo) => {
    return {
        type: 'INCREMENT_CARD_COUNT', 
        name: cardInfo.name
    }
}

export const decrementCardCount = (cardInfo) => {
    return (dispatch, getState) => {   
        const state = getState();
        if (state.deckList.cardCount[cardInfo.name] === 1) {
            dispatch(removeFromDeckList(cardInfo));
        } else {
            dispatch({type: 'DECREMENT_CARD_COUNT', name: cardInfo.name});
        }
    }
}

export const addToMaybe = (cardInfo) => {
    return (dispatch, getState) => {
        const state = getState();
        if (!state.maybeBoard.cards.includes(cardInfo)) {
            dispatch({type: 'ADD_TO_MAYBEBOARD', card: cardInfo});
        }
    }
}

export const deleteFromMaybe = (cardInfo) => {
    return {
        type: 'REMOVE_FROM_MAYBEBOARD',
        card: cardInfo
    }
}