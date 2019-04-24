import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {cards: state.deckList.deckListData}
}

const decklistStyle = {
    border: 'solid black thin',
    width: '40vw',
    height: '50vh',
}

class Decklist extends React.Component {

    render() {
        var deck = this.props.cards.map((card, key) => {
            return <li key={key}> {card.name} </li>
        })

        return (
            <div style={decklistStyle}>
                <div></div>

                <div>
                    <span>creatures</span>
                    <ol>
                        {deck}
                    </ol>
                </div>
                <div>
                    <span>spells</span>
                    <ol>
                        <li>ugin</li>
                        <li>karn</li>
                        <li>counter poop</li>
                        <li>island</li>
                        <li>disallow</li>
                        <li>cavern of souls</li>
                    </ol>
                </div>
                <div>
                    <span>lands</span>
                    <ol>
                        <li>ugin</li>
                        <li>karn</li>
                        <li>counter poop</li>
                        <li>island</li>
                        <li>disallow</li>
                        <li>cavern of souls</li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Decklist);