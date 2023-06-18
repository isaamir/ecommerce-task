import { createAction } from '@reduxjs/toolkit'
import { IProductListType } from './types'

export const productList = createAction<IProductListType[]>('cart/productList')
export const selectedProduct = createAction<IProductListType[]>('cart/selectedProduct')
