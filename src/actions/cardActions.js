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

export const addToMaybe = (cardInfo) => {
    return(dispatch, getState) => {
        const state = getState();
        if (!state.maybeBoard.maybeBoardCards.includes(cardInfo)) {
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