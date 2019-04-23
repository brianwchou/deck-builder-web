import React from 'react';
import Card from './components/Card';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        cards: state.searchDisplay.searchDisplayCards
    }
}

const cardBoxStyle = {
    border: 'solid black thin',
    width: '70vw',
    height: '80vh',
    overflow: 'scroll'
}

class SearchCardDisplay extends React.Component {
    render() {
        const cards  = this.props.cards.map((info, index) => {
            return <Card info={info} updateCardCount={this.updateCardCount} type={"Clickable"} key={index} />
        });
        return (
            <div style={cardBoxStyle}>
                {cards}
            </div>
        )
    }
}

export default connect(mapStateToProps)(SearchCardDisplay)