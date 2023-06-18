import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '..'
import { IProductListHook } from "./types"
import { IProductListType } from './types'
import { productList as setProductListActions  } from "./actions"

//this is use to set the shipping address for the cart
export function useProductListState(): IProductListHook {
    const dispatch = useDispatch<AppDispatch>()
    const productList = useSelector<AppState, AppState['cart']['productList']>(state => state.cart.productList)
  
    const setProductList = useCallback(
      (_address: IProductListType[]) => {
        dispatch(setProductListActions(_address))
      },
      [dispatch]
    )
  
    return { productList, setProductList }
  }