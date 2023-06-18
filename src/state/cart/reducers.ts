import { createReducer } from "@reduxjs/toolkit";
import { productList, selectedProduct } from "./actions";
import { IProductListState } from "./types";
import { IProductListType } from "./types";

export const initialState: IProductListState = {
  productList: [] as IProductListType[],
  selectedProduct: {
    id: 0,
    image: "",
    name: "",
    desc: "",
    price: 0,
  },
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(productList, (state, { payload }) => {
      state.productList = payload;
    })
    .addCase(selectedProduct, (state, { payload }) => {
      state.selectedProduct = payload;
    })
);
