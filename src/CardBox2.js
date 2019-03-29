import React from 'react';
import Card from './components/Card';

const cardBoxStyle = {
    border: 'solid black thin',
    width: '80vw',
    height: '80vh',
    display: 'inline-block'
}

const CardBox2 = (props) => {
    const cards  = props.cards.map((info, index) => {
        return <Card info={info} type={"Clickable"} key={index} />
    });

    return (
        <div style={cardBoxStyle}>
            {cards}
        </div>
    )
}


export default CardBox2