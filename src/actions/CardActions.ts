import { CardInfo } from '../common/types';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from "../reducers"

export enum CARD_COUNT {
  INCREMENT = 'CARD_COUNT_INCREMENT',
  ADD = 'CARD_COUNT_ADD',
  DECREMENT = 'CARD_COUNT_DECREMENT',
  REMOVE = 'CARD_COUNT_REMOVE'
}

export enum DECKLIST {
  ADD = 'DECKLIST_ADD',
  REMOVE = 'DECKLIST_REMOVE',
}

export enum MAYBEBOARD {
  ADD = "MAYBEBOARD_ADD",
  REMOVE = "MAYBEBOARD_REMOVE",
}

/*
    // Helper to extract inferred return type of a function
    type _ExtractReturn<B, F: (...args: any[]) => B> = B;
    type ExtractReturn<F> = _ExtractReturn<*, F>;
    // only need to provide types for arguments in action-creators
    // return type will be inferred
    function setAge(age: number) {
        return { type: AGE, payload: age }
    }
    function setName(name: number) {
        return { type: NAME, payload: name }
    }
    // Create a union type containing all the return types of
    // of your chosen action-creators. 
    // The result can be used as a tagged union 
    // that allows Flow to narrow the payload type 
    // based on 'type' property
    type Actions =
        ExtractReturn<typeof setAge> |
        ExtractReturn<typeof setName>
*/ 

export const addToDeckList = (cardInfo: CardInfo) => {
  return (dispatch: Dispatch<AnyAction>, getState: any) => {
    const state = getState();
    if (state.deckList.includes(cardInfo)) {
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

export const removeFromDeckList = function(cardInfo: CardInfo): 
  ThunkAction<void, RootState, unknown, AnyAction> {

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

export const moveToMaybe = function(cardInfo: CardInfo): any {
  return (dispatch: Function): void => {
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

export const decrementCardCount = function(cardInfo: CardInfo): any {
  return (dispatch: Function, getState: Function): void => {   
    const state = getState();
    if (state.cardCount[cardInfo.name] === 1) {
      dispatch(removeFromDeckList(cardInfo));
    } else {
      dispatch({type: CARD_COUNT.DECREMENT, name: cardInfo.name});
    }
  }
}

export const addToMaybe = function(cardInfo: CardInfo): any {
  return (dispatch: Dispatch<any>, getState: any) => {
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