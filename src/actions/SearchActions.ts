import { CardInfo } from '../common/types';

/*
    action types
*/
export const SEARCH = {
  LOAD: 'SEARCH_LOAD_CARDS'
}

/*
    action creators
*/
export const loadSearchCards = (cards: Array<CardInfo>) => {
    return {
      type: SEARCH.LOAD,
      cards
    }
  }

/*
    thunks
*/
export const getCardSearchData = (url: string) => {
    return (dispatch: any) => {
      fetch(url)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                console.log("response", response.status)
                return null;
            }
        })
        .then((json) => {
          if (json) {
            var cards = json.data
            .map((info: any) => {
                let cardAttributes = {
                    artist: info.artist,
                    cmc: info.cmc,
                    color_identity: info.color_identity,
                    colors: info.colors,
                    image_uris: info.image_uris,
                    layout: info.layout,
                    mana_cost: info.mana_cost,
                    name: info.name,
                    oracle_text: info.oracle_text,
                    power: info.power,
                    rarity: info.rarity,
                    related_cards: info.all_parts,
                    reserved: info.reserved,
                    setName: info.setName,
                    toughness: info.toughness,
                    transform_sides: info.card_faces,
                    typeLine: info.type_line,
                }
                
                if (info.layout === 'transform') {
                    let transformAttributes = {
                        colors: info.card_faces[0].colors,
                        image_uris: [info.card_faces[0].image_uris, info.card_faces[1].image_uris],
                        mana_cost: info.card_faces[0].mana_cost,
                        oracle_text: [info.card_faces[0].orcale_text, info.card_faces[1].orcale_text],
                        power: [info.card_faces[0].power, info.card_faces[1].power],
                        toughness: [info.card_faces[0].toughness, info.card_faces[1].toughness],
                        typeLine: [info.card_faces[0].typeLine, info.card_faces[1].typeLine]
                    }
                    cardAttributes = Object.assign({}, cardAttributes, transformAttributes)
                }
                return cardAttributes
            })
            console.log(cards)
            dispatch(loadSearchCards(cards));
          }
        });
      }
  }