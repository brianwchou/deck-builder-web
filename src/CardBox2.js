import React from 'react';
import { connect } from 'react-redux';
import CardSearchDisplay from './CardSearchDisplay';


const mapStateToProps = (state) => {
    return {
        urls: state.urls,
    }
}


const cardBoxStyle = {
    border: 'solid black thin',
    width: '80vw',
    height: '80vh',
    display: 'inline-block'
}

class CardBox2 extends React.Component {

    get() {

    }

    render() {

        return (
            <div style={cardBoxStyle}>
                <CardSearchDisplay cards={this.props.urls}/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(CardBox2)