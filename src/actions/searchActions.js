/*
    action types
*/
export const LOAD_SEARCH_CARDS = 'LOAD_SEARCH_CARDS'

/*
    action creators
*/
export const loadSearchCards = (cards) => {
    return {
      type: LOAD_SEARCH_CARDS,
      cards
    }
  }

/*
    thunks
*/
export const getCardSearchData = (url) => {
    return (dispatch) => {
      fetch(url)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                console.log("response", response.status)
                return null;
            }
        })
        .then( (json) => {
          if (json) {
            var cards = json.data.filter((info) => {
              return info.layout === "normal"
            })
            .map((info)=> {
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