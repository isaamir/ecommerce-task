
export type TProductData = {
    id: number
    image: string
    name: string
    price:  string
    desc: string
}
export interface ICardProps{
    data : TProductData
    animate?: boolean
}