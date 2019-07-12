export interface CardInfo {
    artist: string,
    cmc: number,
    color_identity: Array<string>,
    colors: Array<string>,
    image_uris: {
        art_crop: string,
        border_crop: string,
        large: string,
        normal: string,
        png: string,
        small: string
    },
    mana_cost: string,
    name: string,
    oracle_text: string,
    power: string,
    rarity: string,
    reserved: boolean,
    setName: string,
    toughness: string,
    typeLine: string,
}