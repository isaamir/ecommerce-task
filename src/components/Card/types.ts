
type TProductData = {
    image: string
    name: string
    price:  string
}
export interface ICardProps{
    data : TProductData
    animate?: boolean
}