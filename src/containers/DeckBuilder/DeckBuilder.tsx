import React from 'react';
import Search from '../../containers/Search';
import DeckList from '../../containers/DeckList/DeckList';
import SearchCardDisplay from '../../containers/SearchCardDisplay/SearchCardDisplay';
import MaybeBoardDisplay from '../../containers/MaybeBoardDisplay/MaybeBoardDisplay';
import './DeckBuilder.css';

export default class DeckBuilder extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <div className="flexboxes">
          <div className="column">
          <SearchCardDisplay />
          <MaybeBoardDisplay />
          </div>
          <div className="column">
            <DeckList />
          </div>
        </div>
        <img className="background" src="https://cdn.arstechnica.net/wp-content/uploads/2016/01/159984_CN-980x597.jpg" alt="default"/>
      </div>
    )
  }
}
