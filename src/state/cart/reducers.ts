import { createReducer } from '@reduxjs/toolkit'
import { productList } from './actions'
import { IProductListState } from './types'
import { IProductListType } from './types'


export const initialState: IProductListState = {
    productList : [
    //     {
    //     id: null,
    //     image: '',
    //     name: '',
    //     price: '',
    //     quantity: ''
    // }
]  as IProductListType[]
}

export default createReducer(initialState, builder => 
    builder.addCase(productList, (state, {payload}) => {
        state.productList = payload
    })
    )