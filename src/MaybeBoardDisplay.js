import React from 'react';
import Card from './components/Card/Card';
import { connect } from 'react-redux';

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
    }

    render() {

        const cards = this.props.cards.map((info, index) => {
            return <Card info={info} type={"Clickable"} key={index} />
        })

        return(
            <div style={maybeBoardStyle}>
                {cards}
            </div>
        )
    }




}


export default connect(mapStateToProps)(MaybeBoardDisplay)