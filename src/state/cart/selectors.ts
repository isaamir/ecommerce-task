import { useSelector } from "react-redux";
import { AppState } from "..";

export function useSelectorProduct(){
    const state = useSelector<AppState, AppState['cart']>(s => s.cart)
    return state
}