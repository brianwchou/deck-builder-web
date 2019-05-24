import React from 'react'
import DeckListEntry from 'containers/DeckList/DeckListEntry';

export default function DeckListEntries({data, type, counts, getCardInfo}) {
    let entries = data.map((entry, index)=> {
        return <DeckListEntry index={index} card={entry} getCardInfo={getCardInfo} count={counts[entry.name]} />
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
