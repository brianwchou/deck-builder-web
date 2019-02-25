const baseURL = 'https://api.scryfall.com';
const searchURL = baseURL + '/cards/named';

export const exactSearchURL = searchURL + '?exact=';
export const fuzzySearchURL = searchURL + '?fuzzy=';