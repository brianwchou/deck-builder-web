import React from 'react';
import Card from './components/Card';
import { connect } from 'react-redux';

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

const addCard = (cardInfo) => {
    return (dispatch, getState) => {
        const state = getState();
        if (state.deckList.main.includes(cardInfo)) {
            dispatch({type: 'INCREMENT_CARD_COUNT', name: cardInfo.name})
        } else {
            dispatch({type:'ADD_TO_DECKLIST', card: cardInfo});
        }
    }
}

const addToMaybe = (cardInfo) => {
    return(dispatch) => {
        dispatch({type: 'ADD_TO_MAYBEBOARD', card: cardInfo});
    }
}

class SearchCardDisplay extends React.Component {
    constructor() {
        super();

        this.getCardInfo = this.getCardInfo.bind(this);
        this.getCardInfoMaybe = this.getCardInfoMaybe.bind(this);
    }

    getCardInfo(cardInfo) {
        this.props.dispatch(addCard(cardInfo));
    }

    getCardInfoMaybe(cardInfo) {
        this.props.dispatch(addToMaybe(cardInfo));
    }

    render() {
        const cards  = this.props.cards.map((info, index) => {
            return <Card info={info} type={"Clickable"} getCardInfoMaybe={this.getCardInfoMaybe} getCardInfo={this.getCardInfo} key={index} />
        });

        return (
            <div style={cardBoxStyle}>
                {cards}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SearchCardDisplay)