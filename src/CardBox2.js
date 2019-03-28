import React from 'react';
import { connect } from 'react-redux';
import CardSearchDisplay from './CardSearchDisplay';
import CardStack from './CardStack'

const mapStateToProps = (state) => {
    return {
        cardStacks: state.cardStacks,
    }
}

const cardBoxStyle = {
    border: 'solid black thin',
    width: '80vw',
    height: '80vh',
    display: 'inline-block'
}

class CardBox2 extends React.Component {
    render() {
        var cardStacks = this.props.cardStacks.map((urls, index) => {
            return <CardStack urls={urls} key={index} />
        })

        return (
            <div style={cardBoxStyle}>
               
            </div>
        )
    }
}

export default connect(mapStateToProps)(CardBox2)