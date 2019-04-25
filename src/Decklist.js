import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {main: state.deckList.main}
}

const decklistStyle = {
    border: 'solid black thin',
    width: '40vw',
    height: '50vh',
}

// presentational
const DeckListEntries = (props) => {
    let entries = props.data.map((entry, index)=> {
        return <li key={index}> {entry.name} </li>
    }) 
    return (entries.length) ? (
        <div>
            <span>{props.type}</span>
            <ul>
                {entries}
            </ul>
        </div>
    ) : null;
}

// presentational
const DeckTypeSelection = (props) => {
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
        var sortedByTypes = this.props.main.reduce((sortedByTypes, cardData) => {
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

        console.log(sortedByTypes)

        return (
            <div style={decklistStyle}>
                <div>
                    <DeckTypeSelection />
                </div>
                <DeckListEntries type={"Creatures"} data={sortedByTypes.creatures}/>
                <DeckListEntries type={"Spells"} data={sortedByTypes.spells}/>
                <DeckListEntries type={"Enchantments"} data={sortedByTypes.enchantments}/>
                <DeckListEntries type={"Artifacts"} data={sortedByTypes.artifacts}/>
                <DeckListEntries type={"Planeswalkers"} data={sortedByTypes.planeswalkers}/>
                <DeckListEntries type={"Lands"} data={sortedByTypes.lands}/>
                <DeckListEntries type={"Other *debugging*"} data={sortedByTypes.other}/>

            </div>
        )
    }
}

export default connect(mapStateToProps)(DeckList);