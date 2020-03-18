import React from 'react';
import Card from '../../components/Card';
import { connect } from 'react-redux';
import {addToDeckList, addToMaybe} from '../../actions/CardActions';

export const mapStateToProps = ({searchDisplay, deckList}) => {
    return {
        cards: searchDisplay.cards,
        counts: deckList.cardCount
    };
}

const cardBoxStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    border: 'solid black thin',
    width: '50vw',
    height: '50vh',
    overflow: 'scroll',
} as React.CSSProperties

export const SearchCardDisplay = ({cards, dispatch}) => {

    const getCardInfo = (cardInfo, buttonType) => {
        if (buttonType === "add") {
            dispatch(addToDeckList(cardInfo));
        } else if (buttonType === "other") {
            dispatch(addToMaybe(cardInfo));
        }
    };

    const cardList = cards.map((info, index) => {
        return <Card info={info} getCardInfo={getCardInfo} buttonDisplay={'Add to MaybeBoard'} key={index} />;
    });

    return (
        <div style={cardBoxStyle}>
            {cardList}
        </div>
    );
}

export default connect(mapStateToProps)(SearchCardDisplay)