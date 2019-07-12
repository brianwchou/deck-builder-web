const baseURL = 'https://api.scryfall.com';
const searchURL = baseURL + '/cards/named';
const listURL = baseURL + '/cards/search';

export const exactSearchURL = searchURL + '?exact=';
export const fuzzySearchURL = searchURL + '?fuzzy=';
export const filteredSearchURL = listURL + '?q=';

const walkingBalista = 'https://img.scryfall.com/cards/small/front/3/2/329a8738-3e17-403a-857a-0ba529ce8cd1.jpg?1543701177';
const snapCaster = 'https://img.scryfall.com/cards/small/front/7/e/7e41765e-43fe-461d-baeb-ee30d13d2d93.jpg?1547516526';
const urzaTower = 'https://img.scryfall.com/cards/small/en/me4/259a.jpg?1544632409';
const urzaPowerPlant = 'https://img.scryfall.com/cards/small/en/me4/258a.jpg?1544632161';
const urzaMine = 'https://img.scryfall.com/cards/small/en/me4/257d.jpg?1544632039';
const condescend = 'https://img.scryfall.com/cards/small/en/ima/46.jpg?1530591830'; 
const thirstForKnowledge = 'https://img.scryfall.com/cards/small/en/c18/106.jpg?1535503409';
const thoughtKnotSeer = 'https://img.scryfall.com/cards/small/en/ogw/9.jpg?1517813031';
const treasureMage = 'https://img.scryfall.com/cards/small/en/ddu/40.jpg?1523060985';
const trinketMage = 'https://img.scryfall.com/cards/small/en/ddu/41.jpg?1523060999';
const wormCoilEngine = 'https://img.scryfall.com/cards/small/en/cm2/231.jpg?1534113193';
const sunderingTitan = 'https://img.scryfall.com/cards/small/en/a25/233.jpg?1521726236';
const ugin = 'https://img.scryfall.com/cards/small/en/frf/1.jpg?1517813031';
const repeal = 'https://img.scryfall.com/cards/small/en/ima/70.jpg?1530591972';
const remand = 'https://img.scryfall.com/cards/small/en/mm2/55.jpg?1517813031';
const chaliceOfTheVoid  = 'https://img.scryfall.com/cards/small/en/a25/222.jpg?1521725918';
const cyclonicRift = 'https://img.scryfall.com/cards/small/en/mm3/35.jpg?1517813031';
const expeditionMap = 'https://img.scryfall.com/cards/small/en/mm2/213.jpg?1517813031';
const engineeredExplosives = 'https://img.scryfall.com/cards/small/front/f/1/f1e2b69e-b06b-46a5-ac57-a6a180eeecc7.jpg?1547518428';
const talismanOfDominence = 'https://img.scryfall.com/cards/small/en/e01/90.jpg?1517813031';
const talismanOfProgress = 'https://img.scryfall.com/cards/small/en/td2/26.jpg?1517813031';
const oblivionStone = 'https://img.scryfall.com/cards/small/en/cm2/205.jpg?1534112917';
const mindSlaver = 'https://img.scryfall.com/cards/small/en/som/176.jpg?1517813031';
const academyRuins = 'https://img.scryfall.com/cards/small/en/mma/219.jpg?1517813031';
const gemStoneCaverns = 'https://img.scryfall.com/cards/small/en/tsp/274.jpg?1517813031';
const island = 'https://img.scryfall.com/cards/small/front/a/c/ac28037a-461b-4fb3-9feb-d3eb739da995.jpg?1551119362';
const tetonicEdge = 'https://img.scryfall.com/cards/small/en/c14/313.jpg?1530679235';
const tolariaWest = 'https://img.scryfall.com/cards/small/en/fut/173.jpg?1530718954';
const oboroPalaceInTheClouds = 'https://img.scryfall.com/cards/small/en/sok/164.jpg?1517813031';
const fieldOfRuin = 'https://img.scryfall.com/cards/small/en/xln/254.jpg?1527431443';

export const blueTron = [
                            [walkingBalista, 
                            snapCaster,
                            thoughtKnotSeer,
                            thoughtKnotSeer,
                            trinketMage,
                            treasureMage,
                            wormCoilEngine,
                            sunderingTitan,],
                            [ugin,],
                            [condescend,
                            condescend,
                            condescend,
                            condescend,
                            repeal,
                            repeal,
                            cyclonicRift,
                            remand,
                            remand,
                            remand,
                            thirstForKnowledge,
                            thirstForKnowledge,
                            thirstForKnowledge,
                            thirstForKnowledge,],
                            [chaliceOfTheVoid,
                            chaliceOfTheVoid,
                            chaliceOfTheVoid,
                            engineeredExplosives,
                            expeditionMap,
                            expeditionMap,
                            expeditionMap,
                            expeditionMap,
                            talismanOfDominence,
                            talismanOfProgress,
                            oblivionStone,
                            mindSlaver,
                            mindSlaver,],
                            [academyRuins,
                            fieldOfRuin,
                            gemStoneCaverns,
                            island,
                            island,
                            island,
                            island,
                            island,
                            island,
                            oboroPalaceInTheClouds,
                            tetonicEdge,
                            tolariaWest,
                            urzaMine, 
                            urzaMine, 
                            urzaMine, 
                            urzaMine, 
                            urzaPowerPlant, 
                            urzaPowerPlant, 
                            urzaPowerPlant, 
                            urzaPowerPlant, 
                            urzaTower,
                            urzaTower,
                            urzaTower,
                            urzaTower,]
                        ]