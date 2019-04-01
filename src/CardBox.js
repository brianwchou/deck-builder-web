import React from 'react';
import { connect } from 'react-redux';
import CardStack from './CardStack';

const mapStateToProps = (state) => {
    return {
        cardStacks: state.cardStacks,
    }
}

const cardBoxStyle = {
    display: 'flex',
    border: 'solid thin',
    width: '100vw',
    height: '80vh'
  }

class CardBox extends React.Component {
    constructor(props){
        super(props)
    }

    get() {

    }

    render() {
        var cardstacks = this.props.cardStacks.map((array, index) => {
            return <CardStack urls={array} key={index} />
        }) 

        return (
            <div style={cardBoxStyle}>
                {cardstacks}
            </div>
        )
    }
}

export default connect(mapStateToProps)(CardBox)