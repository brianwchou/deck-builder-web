import React from 'react';
import Card from 'components/Card';
import { connect } from 'react-redux';
import {addToDeckList, addToMaybe} from 'actions/cardActions';

const mapStateToProps = (state) => {
    return {
        cards: state.searchDisplay.searchDisplayCards,
        counts: state.deckList.cardCount
    }
}

const cardBoxStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    border: 'solid black thin',
    width: '63vw',
    height: '50vh',
    overflow: 'scroll',
}


class SearchCardDisplay extends React.Component {
    constructor() {
        super();

        this.getCardInfo = this.getCardInfo.bind(this);
    }


    getCardInfo(cardInfo, buttonType) {
        if (buttonType === "add") {
            this.props.dispatch(addToDeckList(cardInfo));
        } else if (buttonType === "other") {
            this.props.dispatch(addToMaybe(cardInfo));
        }
    }

    render() {
        const cards  = this.props.cards.map((info, index) => {
            return <Card info={info} getCardInfo={this.getCardInfo} buttonDisplay={'Add to MaybeBoard'} key={index} />
        });

        return (
            <div style={cardBoxStyle}>
                {cards}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SearchCardDisplay)