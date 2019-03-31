import React, { useState } from 'react';
import Card from './components/Card';

const CardStackStyle = {
    display: 'inline-block', 
    width: '145px',
    minHeight: '75vh',
    maxHeight: '75vh',
    backgroundColor: 'white',
    overflow: 'hidden',
    padding: '10px',
    textAlign: 'center'
}

export default function CardStack({ urls }) {
    const [test, setTest] = useState(0);
    const [currentCardNo, setCurrentCardNo] = useState(-1);

    const onDragEnter = (e) => {
        if (test === 0) {
            e.currentTarget.style.backgroundColor = "pink" 
        }
        setTest(test + 1);
    }

    const onDragLeave = (e) => {
        if (test === 1) {
            e.currentTarget.style.backgroundColor = "white"
            console.log(currentCardNo)
            
            // this.props.dispatch({
            //     type: 'DELETE_URL_STORE',
            //     stackNo: this.props.index,
            //     url: "",
            // })
        }
        setTest(test - 1)
        e.stopPropagation()
    }

    const getCardNo = (cardIndex) => {
        setCurrentCardNo(cardIndex)
    }

    var cards = urls.map((url, index) => {
        return <Card url={url} key={index} index={index} getCardNo={getCardNo} style={{transform: `translateY(-${185 * index}px)`}} />
    });

    return(
        <div style={CardStackStyle}  
            onDragLeave={onDragLeave}
            onDragEnter={onDragEnter}
        >
            {cards}
        </div>
    )   
}