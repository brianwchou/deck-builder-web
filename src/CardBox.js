import React from 'react';
import { connect } from 'react-redux';
import CardStack from './CardStack';

const separateInToComponents = (urls) => {
    let arrays = [];
    for (var i = 0 ; i < urls.length; i+= 16) {
        arrays.push(urls.slice(i, i+16))
    }
    return arrays
}

const mapStateToProps = (state) => {
    return {
        urls: separateInToComponents(state.urls),
    }
}

const cardBoxStyle = {
    border: 'solid black thin',
    width: '100vw',
    minHeight: '50vh',
    display: 'inline-block'
  }

class CardBox extends React.Component {
    constructor(props){
        super(props)
    }

    get() {

    }



    render() {
        var cardstacks = this.props.urls.map((array, index) => {
            return <CardStack cards={array} key={index} dragleave/>
        }) 

        return (
            <div style={cardBoxStyle}>
                {cardstacks}
            </div>
        )
    }
}

export default connect(mapStateToProps)(CardBox)