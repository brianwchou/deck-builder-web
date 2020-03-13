import React from 'react';
import { connect } from 'react-redux';
import Metrics from '../../components/Metrics';
import DeckTypeSelection from '../DeckList/DeckTypeSelection';
import DeckListEntries from '../DeckList/DeckListEntries';
import {incrementCardCount, decrementCardCount, moveToMaybe} from '../../actions/CardActions';
import './DeckList.css'
import { CardInfo, CardCount } from '../../common/types'
import { Dispatch } from 'react';
import { AnyAction } from 'redux';

export interface OrangizedCards {
  artifacts: CardInfo[],
  enchantments: CardInfo[],
  spells: CardInfo[],
  planeswalkers: CardInfo[],
  lands: CardInfo[],
  creatures: CardInfo[],
  other: CardInfo[]
}

export interface DeckListState {
  deckList: CardInfo[],
  cardCount: CardCount
}

export interface DeckListProps extends DeckListState {
  dispatch?: Dispatch<AnyAction>
}

export const mapStateToProps = (state: DeckListState) => {
  const {deckList, cardCount} = state
  return {
    deckList,
    cardCount
  }
}

export const organizeCards = (cards: CardInfo[]) => {
  return cards.reduce((sortedByTypes: OrangizedCards, cardData: CardInfo) => {
    const typeline: String = cardData.typeLine.toLowerCase()
    const {
      creatures, 
      lands, 
      enchantments, 
      artifacts, 
      planeswalkers, 
      spells, 
      other
    } = sortedByTypes

    if (typeline.includes('creature')) {
      return {...sortedByTypes, 
        creatures: [...creatures, cardData]}
    } else if (typeline.includes('land')) {
      return {...sortedByTypes, 
        lands: [...lands, cardData]} 
    } else if (typeline.includes('enchantment')) {
      return {...sortedByTypes, 
        enchantments: [...enchantments, cardData]}
    } else if (typeline.includes('artifact')) {
      return {...sortedByTypes, 
        artifacts: [...artifacts, cardData]}
    } else if (typeline.includes('planeswalker')) {
      return {...sortedByTypes, 
        planeswalkers: [...planeswalkers, cardData]}
    } else if (typeline.includes('sorcery')) {
      return {...sortedByTypes, 
        spells: [...spells, cardData]}
    } else if (typeline.includes('instant')) {
      return {...sortedByTypes, 
        spells: [...spells, cardData]}
    } else {
      return {...sortedByTypes, 
        other: [...other, cardData]}
    }
  }, {
    artifacts: [],
    enchantments: [],
    spells: [],
    planeswalkers: [],
    lands: [],
    creatures: [],
    other: []
  })
}

const decklistStyle = {
    border: 'solid black thin',
    width: '35vw',
    height: '50vh',
    padding: '15px',
    overflow: 'scroll',
}

export class DeckList extends React.Component<DeckListProps> {
  constructor(props) {
      super(props);
      this.getCardInfo = this.getCardInfo.bind(this);
  }

  getCardInfo(cardInfo, buttonType) {
    if (buttonType === 'increment') {
      this.props.dispatch(incrementCardCount(cardInfo));
    } else if (buttonType === 'decrement') {
      this.props.dispatch(decrementCardCount(cardInfo));
    } else if (buttonType === 'maybe') {
      this.props.dispatch(moveToMaybe(cardInfo));
    }
  }

  render() {
    // expecting deck lists sort data here?
    const sortedByTypes = organizeCards(this.props.deckList)
    const {
      creatures, 
      lands, 
      enchantments, 
      artifacts, 
      planeswalkers, 
      spells, 
      other
    } = sortedByTypes

    return (
      <div>
        <div style={decklistStyle}>
          <div><b> DECK TITLE </b></div>
          <DeckTypeSelection />
          <DeckListEntries getCardInfo={this.getCardInfo} type={"Creatures"} data={creatures} counts={this.props.cardCount}/>
          <DeckListEntries getCardInfo={this.getCardInfo} type={"Spells"} data={spells} counts={this.props.cardCount} />
          <DeckListEntries getCardInfo={this.getCardInfo} type={"Enchantments"} data={enchantments} counts={this.props.cardCount}/>
          <DeckListEntries getCardInfo={this.getCardInfo} type={"Artifacts"} data={artifacts} counts={this.props.cardCount}/>
          <DeckListEntries getCardInfo={this.getCardInfo} type={"Planeswalkers"} data={planeswalkers} counts={this.props.cardCount}/>
          <DeckListEntries getCardInfo={this.getCardInfo} type={"Lands"} data={lands} counts={this.props.cardCount}/>
          <DeckListEntries getCardInfo={this.getCardInfo} type={"Other *debugging*"} data={other} counts={this.props.cardCount}/>
        </div>
          
        <Metrics main={this.props.deckList} counts={this.props.cardCount}/>
      </div>
    )
  }
}

export default connect(mapStateToProps)(DeckList);