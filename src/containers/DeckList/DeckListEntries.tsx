import React from 'react'
import DeckListEntry from './DeckListEntry'
import { CardInfo, CardCount } from '../../common/types';

type DeckListEntriesProps = {
  data: Array<CardInfo>,
  type: string,
  counts: CardCount,
  getCardInfo(card: CardInfo, name: string): void,
}

export default function DeckListEntries({data, type, counts, getCardInfo}: DeckListEntriesProps) {
  let entries = data.map((entry: CardInfo, index: number) => {
    return <DeckListEntry index={index} key={index} card={entry} getCardInfo={getCardInfo} count={counts[entry.name]} />
  }) 
  return (entries.length) ? (
    <>
      <div className="type_padding">{type}</div>
      <div>
        {entries}
      </div>
    </>
  ) : null;
}
