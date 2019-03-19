import React from 'react';
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

export default class CardStack extends React.Component {
    state = {
        test: 0
    }

    constructor(props) {
        super(props);
        this.onDragLeave = this.onDragLeave.bind(this)
        this.onDragEnter = this.onDragEnter.bind(this)
    }

    onDragEnter(e){
        if (this.state.test === 0) {
            e.currentTarget.style.backgroundColor = "pink" 
        }
        this.setState({test: this.state.test + 1})
    }

    onDragLeave(e) {
        
        if (this.state.test === 1) {
            e.currentTarget.style.backgroundColor = "white"
        }
        
        this.setState({
            test: this.state.test - 1
        })
    }

    render() {
        // multiples of 185 pixels for small
        var cards = this.props.cards.map((url, index) => {
            return <Card url={url} key={index} style={{transform: `translateY(-${185 * index}px)`}} />
        });

        return(
                <div style={CardStackStyle}  
                    onDragLeave={this.onDragLeave}
                    onDragEnter={this.onDragEnter}
                >
                    {cards}
                </div>
        )
    }
}