import React from 'react';
import Card from './components/Card';
import { connect } from 'react-redux';

const cardBoxStyle = {
    border: 'solid black thin',
    width: '80vw',
    height: '80vh',
    display: 'inline-block'
}

class CardBox2 extends React.Component {
    constructor(props){
        super(props);

        this.updateCardCount = this.updateCardCount.bind(this);
    }

    updateCardCount(value) {
        console.log(value)
    }

    render() {
        const cards  = this.props.data.map((info, index) => {
            return <Card info={info} updateCardCount={this.updateCardCount} type={"Clickable"} key={index} />
        });
    
        return (
            <div style={cardBoxStyle}>
                {cards}
            </div>
        )
    }
}


export default connect()(CardBox2)