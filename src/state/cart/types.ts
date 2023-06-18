export interface IProductListType {
    id: number,
    image: string,
    name: string,
    price: string,
    quantity: number
}

export interface IProductListState {
    productList:  IProductListType[]
}

export interface IProductListHook {
    productList:  IProductListType[]
    setProductList: (listProduct: IProductListType[]) => void

}