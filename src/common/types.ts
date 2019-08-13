interface related_object {
    component: string,
    id: string,
    name: string,
    object: string,
    type_line: string,
    uri: string
}

interface transform_object {
    colors: Array<string>,
    image_uris:Array<any>,
    manacost: string,
    name: string,
    oracle_text: string,
    power: string,
    toughness: string,
    typeLine: string
}

export interface CardInfo {
    artist: string,
    cmc: number,
    color_identity: Array<string>,
    colors: Array<string>,
    image_uris: any,
    layout: string,
    mana_cost: string,
    name: string,
    oracle_text: string,
    power: string,
    rarity: string,
    related_cards: related_object[],
    reserved: boolean,
    setName: string,
    toughness: string,
    transform_sides: transform_object[],
    typeLine: string,
}