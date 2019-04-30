import React from 'react';
import { connect } from 'react-redux';
import './DeckList.css'

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
    overflow: 'scroll',
}

const DeckListEntry = ({key, name, count}) => {
    return (
        <tr key={key}> 
            <td>{name}</td>
            <td className={'center-align'}>{count}</td>  
            <td className={'right-align'}>
                <button>plus</button>
                /
                <button>minus</button>
            </td>
        </tr>
    )
}

// presentational
const DeckListEntries = ({data, type, counts}) => {

    let entries = data.map((entry, index)=> {
        return <DeckListEntry key={index} name={entry.name} count={counts[entry.name]} />
    }) 
    return (entries.length) ? (
        <>
            <span><b>{type}</b></span>
            {entries}
        </>
    ) : null;
}

// presentational
const DeckTypeSelection = () => {
    return (
        <select>
            <option hidden disabled selected value> -- select a format -- </option>
            <option value="standard">Standard</option>
            <option value="modern">Modern</option>
            <option value="legacy">Legacy</option>
            <option value="vintage">Vinatage</option>
            <option value="commander">Commander</option>
            <option value="other">Other</option>
        </select>
    )
} 

//conatiner
class DeckList extends React.Component {
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
                <table>
                    <DeckListEntries type={"Creatures"} data={sortedByTypes.creatures} counts={this.props.counts}/>
                    <DeckListEntries type={"Spells"} data={sortedByTypes.spells} counts={this.props.counts} />
                    <DeckListEntries type={"Enchantments"} data={sortedByTypes.enchantments} counts={this.props.counts}/>
                    <DeckListEntries type={"Artifacts"} data={sortedByTypes.artifacts} counts={this.props.counts}/>
                    <DeckListEntries type={"Planeswalkers"} data={sortedByTypes.planeswalkers} counts={this.props.counts}/>
                    <DeckListEntries type={"Lands"} data={sortedByTypes.lands} counts={this.props.counts}/>
                    <DeckListEntries type={"Other *debugging*"} data={sortedByTypes.other} counts={this.props.counts}/>
                </table>
            </div>
        )
    }
}

export default connect(mapStateToProps)(DeckList);