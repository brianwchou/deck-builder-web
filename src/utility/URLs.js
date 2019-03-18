const baseURL = 'https://api.scryfall.com';
const searchURL = baseURL + '/cards/named';

export const exactSearchURL = searchURL + '?exact=';
export const fuzzySearchURL = searchURL + '?fuzzy=';

export const moxOpal = 'https://img.scryfall.com/cards/small/en/mm2/223.jpg?1517813031';
export const walkingBalista = 'https://img.scryfall.com/cards/small/front/3/2/329a8738-3e17-403a-857a-0ba529ce8cd1.jpg?1543701177';
export const snapCaster = 'https://img.scryfall.com/cards/small/front/7/e/7e41765e-43fe-461d-baeb-ee30d13d2d93.jpg?1547516526';
export const urzaTower = 'https://img.scryfall.com/cards/small/en/me4/259a.jpg?1544632409';
export const urzaPowerPlant = 'https://img.scryfall.com/cards/small/en/me4/258a.jpg?1544632161';
export const urzaMine = 'https://img.scryfall.com/cards/small/en/me4/257d.jpg?1544632039';

export const cardBundle = [moxOpal, walkingBalista, snapCaster, urzaMine, urzaPowerPlant, urzaTower]