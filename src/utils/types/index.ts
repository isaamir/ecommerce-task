export interface IProductType {
    id: number,
    image: string,
    name: string,
    price: number,
    desc?: string
    quantity?: number
}

export interface IProductList {
    productList : IProductType[]
}