type MainImage = {
    url_570xN: string
}

export type TItem = {
    listing_id: string,
    state: string,
    url: string,
    title: string,
    price: string,
    currency_code: string,
    quantity: number,
    MainImage: MainImage,
}