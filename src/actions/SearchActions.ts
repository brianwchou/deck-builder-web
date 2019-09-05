import { CardInfo } from '../common/types';

export const SEARCH = {
  LOAD: 'SEARCH_LOAD_CARDS',
  ERROR: 'SEARCH_ERROR'
}

export const loadSearchCards = (cards: Array<CardInfo>) => {
    return {
      type: SEARCH.LOAD,
      cards
    }
  }

export const getCardSearchData = (url: string) => {
    return (dispatch: any) => {
      fetch(url)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else if (response.status === 404) {
                console.log("response", response.status)
                dispatch({type: SEARCH.ERROR})
            }
        })
        .then((json) => {
          if (json) {
            var cards = json.data.filter((info: any) => {
              return info.layout === "normal"
            })
            .map((info: any) => {
                return {
                  artist: info.artist,
                  cmc: info.cmc,
                  color_identity: info.color_identity,
                  colors: info.colors,
                  image_uris: info.image_uris,
                  mana_cost: info.mana_cost,
                  name: info.name,
                  oracle_text: info.oracle_text,
                  power: info.power,
                  rarity: info.rarity,
                  reserved: info.reserved,
                  setName: info.setName,
                  toughness: info.toughness,
                  typeLine: info.type_line,
                }
            })
            console.log(cards)
            dispatch(loadSearchCards(cards));
          }
        });
      }
  }