import React from 'react';
import { connect } from 'react-redux';
import Metrics from '../../components/Metrics';
import DeckTypeSelection from '../DeckList/DeckTypeSelection';
import DeckListEntries from '../DeckList/DeckListEntries';
import {incrementCardCount, decrementCardCount, moveToMaybe} from '../../actions/CardActions';
import './DeckList.css'

export const mapStateToProps = (state) => {
    return {
        main: state.deckList.main,
        counts: state.cardCount.counts
    }
}

const tags = ['artifacts', 'enchantments', 'spells', 'planeswalkers', 'lands', 'creatures', 'other']

export const organizeCards = (cards) => {
    return cards.reduce((sortedByTypes, cardData) => {
        if (cardData.typeLine.toLowerCase().includes('creature')) {
            return {...sortedByTypes, creatures: [...sortedByTypes.creatures, cardData]}
        } else if (cardData.typeLine.toLowerCase().includes('land')) {
            return {...sortedByTypes, lands: [...sortedByTypes.lands, cardData]} 
        } else if (cardData.typeLine.toLowerCase().includes('enchantment')) {
            return {...sortedByTypes, enchantments: [...sortedByTypes.enchantments, cardData]}
        } else if (cardData.typeLine.toLowerCase().includes('artifact')) {
            return {...sortedByTypes, artifacts: [...sortedByTypes.artifacts, cardData]}
        } else if (cardData.typeLine.toLowerCase().includes('planeswalker')) {
            return {...sortedByTypes, planeswalkers: [...sortedByTypes.planeswalkers, cardData]}
        } else if (cardData.typeLine.toLowerCase().includes('sorcery')) {
            return {...sortedByTypes, spells: [...sortedByTypes.spells, cardData]}
        } else if (cardData.typeLine.toLowerCase().includes('instant')) {
            return {...sortedByTypes, spells: [...sortedByTypes.spells, cardData]}
        } else {
            return {...sortedByTypes, other: [...sortedByTypes.other, cardData]}
        }
    }, {
        artifacts: [],
        enchantments: [],
        spells: [],
        planeswalkers: [],
        lands: [],
        creatures: [],
        other: []
    })
}

const decklistStyle = {
    border: 'solid black thin',
    width: '35vw',
    height: '50vh',
    padding: '15px',
    overflow: 'scroll',
}

//container
export class DeckList extends React.Component {
    constructor() {
        super();
        this.getCardInfo = this.getCardInfo.bind(this);
    }

    getCardInfo(cardInfo, buttonType) {
        if (buttonType === 'increment') {
            this.props.dispatch(incrementCardCount(cardInfo));
        } else if (buttonType === 'decrement') {
            this.props.dispatch(decrementCardCount(cardInfo));
        } else if (buttonType === 'maybe') {
            this.props.dispatch(moveToMaybe(cardInfo));
        }
    }

    render() {
        // expecting deck lists sort data here?
        const sortedByTypes = organizeCards(this.props.main)

        return (
            <div>
                <div style={decklistStyle}>
                    <div><b> DECK TITLE </b></div>
                        <DeckTypeSelection />
                        <DeckListEntries getCardInfo={this.getCardInfo} type={"Creatures"} data={sortedByTypes.creatures} counts={this.props.counts}/>
                        <DeckListEntries getCardInfo={this.getCardInfo} type={"Spells"} data={sortedByTypes.spells} counts={this.props.counts} />
                        <DeckListEntries getCardInfo={this.getCardInfo} type={"Enchantments"} data={sortedByTypes.enchantments} counts={this.props.counts}/>
                        <DeckListEntries getCardInfo={this.getCardInfo} type={"Artifacts"} data={sortedByTypes.artifacts} counts={this.props.counts}/>
                        <DeckListEntries getCardInfo={this.getCardInfo} type={"Planeswalkers"} data={sortedByTypes.planeswalkers} counts={this.props.counts}/>
                        <DeckListEntries getCardInfo={this.getCardInfo} type={"Lands"} data={sortedByTypes.lands} counts={this.props.counts}/>
                        <DeckListEntries getCardInfo={this.getCardInfo} type={"Other *debugging*"} data={sortedByTypes.other} counts={this.props.counts}/>
                </div>
                <Metrics main={this.props.main} counts={this.props.counts}/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(DeckList);