import React from 'react';
import { connect } from 'react-redux';
import './DeckList.css'
import {incrementCardCount, decrementCardCount, moveToMaybe} from 'actions/cardActions';

const mapStateToProps = (state) => {
    return {
        main: state.deckList.main,
        counts: state.deckList.cardCount
    }
}

const decklistStyle = {
    border: 'solid black thin',
    width: '35vw',
    height: '50vh',
    padding: '15px',
    overflow: 'scroll',
}

const DeckListEntry = ({index, card, count, getCardInfo}) => {
    
    const handleOnClick = (e) => {
        getCardInfo(card, e.target.name);
    }

    return (
        <div className="flex alignment" key={index}> 
            <div className="flex count">
                {count}x 
                <button onClick={handleOnClick} name={'increment'}>+</button>
            </div>
            <div className="flex name">
                {card.name} 
                <button onClick={handleOnClick} name={'decrement'}>-</button>
                <button onClick={handleOnClick} name={'maybe'}>maybe</button>
            </div>        
        </div>
    )
}

// presentational
const DeckListEntries = ({data, type, counts, getCardInfo}) => {
    let entries = data.map((entry, index)=> {
        return <DeckListEntry index={index} card={entry} getCardInfo={getCardInfo} count={counts[entry.name]} />
    }) 
    return (entries.length) ? (
        <>
            <div className="type_padding">{type}</div>
            <div>
                {entries}
            </div>
        </>
    ) : null;
}

// presentational
const DeckTypeSelection = () => {
    return (
        <select>
            <option value="standard">Standard</option>
            <option value="modern">Modern</option>
            <option value="legacy">Legacy</option>
            <option value="vintage">Vinatage</option>
            <option value="commander">Commander</option>
            <option value="other">Other</option>
        </select>
    )
} 

//container
class DeckList extends React.Component {
    constructor() {
        super();

        this.getCardInfo = this.getCardInfo.bind(this);
    }

    getCardInfo(cardInfo, buttonType) {
        if (buttonType === 'increment') {
            console.log(buttonType)
            this.props.dispatch(incrementCardCount(cardInfo));
        } else if (buttonType === 'decrement') {
            console.log(buttonType)
            this.props.dispatch(decrementCardCount(cardInfo));
        } else if (buttonType === 'maybe') {
            console.log(buttonType)
            this.props.dispatch(moveToMaybe(cardInfo));
        }
    }

    render() {
        // expecting deck lists sort data here?
        const sortedByTypes = this.props.main.reduce((sortedByTypes, cardData) => {
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

        return (
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
        )
    }
}

export default connect(mapStateToProps)(DeckList);