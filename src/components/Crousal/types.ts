import { CrousalVarients } from "@/utils/enums"

type TProductDataType = {
    image: string
    name: string
    price: number
  }
  type THomeDataType = {
    image: string
  }
  export interface ICrousalProps {
    variant: CrousalVarients,
    productData?: TProductDataType[]
    homeData?: THomeDataType[]
    slider?: any
  }