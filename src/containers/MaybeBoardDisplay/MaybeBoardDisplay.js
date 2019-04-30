import React from 'react';
import Card from 'components/Card';
import { connect } from 'react-redux';
import {addToDeckList, deleteFromMaybe} from 'actions/cardActions';

const mapStateToProps = (state) => {
    return {
        cards: state.maybeBoard.maybeBoardCards
    }
}

const maybeBoardStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    border: 'solid black thin',
    width: '63vw',
    height: '28vh',
    overflow: 'scroll',
}

class MaybeBoardDisplay extends React.Component {
    constructor() {
        super();

        this.getCardInfo = this.getCardInfo.bind(this);
    }

    getCardInfo(cardInfo, buttonType) {
        if (buttonType === "add") {
            this.props.dispatch(addToDeckList(cardInfo));
        } else if (buttonType === "other") {
            this.props.dispatch(deleteFromMaybe(cardInfo));
        }
    }

    render() {
        const cards = this.props.cards.map((info, index) => {
            return <Card info={info} key={index} getCardInfo={this.getCardInfo} buttonDisplay={'Delete'} />
        })

        return(
            <div style={maybeBoardStyle}>
                {cards}
            </div>
        )
    }
}

export default connect(mapStateToProps)(MaybeBoardDisplay)