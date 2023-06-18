import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '..'
import { IProductListHook, ISelectedProductHook } from "./types"
import { IProductListType } from './types'
import { productList as setProductListActions  } from "./actions"
import { selectedProduct as  setSelectedProductActions } from './actions'

//this is use to set the shipping address for the cart
export function useProductListState(): IProductListHook {
    const dispatch = useDispatch<AppDispatch>()
    const productList = useSelector<AppState, AppState['cart']['productList']>(state => state.cart.productList)
  
    const setProductList = useCallback(
      (_prodList: IProductListType[]) => {
        dispatch(setProductListActions(_prodList))
      },
      [dispatch]
    )
    return { productList, setProductList }
  }

  export function useSelectedProductState(): ISelectedProductHook {
    const dispatch = useDispatch<AppDispatch>()
    const selectedProduct = useSelector<AppState, AppState['cart']['selectedProduct']>(state => state.cart.selectedProduct)
  
    const setSelectedProduct = useCallback(
      (_selectedProd: any) => {
        dispatch(setSelectedProductActions(_selectedProd))
      },
      [dispatch]
    )
  
    return { selectedProduct, setSelectedProduct }
  }