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
    width: '63vw',
    height: '50vh',
    overflow: 'scroll',
} as React.CSSProperties

export const SearchCardDisplay = (props) => {
    const getCardInfo = (cardInfo, buttonType) => {
        if (buttonType === "add") {
            this.props.dispatch(addToDeckList(cardInfo));
        } else if (buttonType === "other") {
            this.props.dispatch(addToMaybe(cardInfo));
        }
    };

    const cards = props.cards.map((info, index) => {
        return <Card info={info} getCardInfo={getCardInfo} buttonDisplay={'Add to MaybeBoard'} key={index} />;
    });

    return (
        <div style={cardBoxStyle}>
            {cards}
        </div>
    );
}

export default connect(mapStateToProps)(SearchCardDisplay)