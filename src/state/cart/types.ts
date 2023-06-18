export interface IProductListType {
    id: number,
    image: string,
    name: string,
    price: number,
    quantity: number
}

export interface IProductListState {
    productList:  IProductListType[]
    selectedProduct: {}
}

export interface IProductListHook {
    productList:  IProductListType[]
    setProductList: (listProduct: IProductListType[]) => void
}

export interface ISelectedProductHook {
    selectedProduct : {}
    setSelectedProduct: (selectedProduct: any) => void
}