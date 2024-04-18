import { CoffeeCartState } from "../../contexts/CartContext";
import { ActionTypes } from "./action";

export interface CoffeeCart{
    src: string;
    title: string;
    quantity: number;
    price: number;
}

export function CoffeeCartReducer(state: CoffeeCartState, action: any){
    switch(action.type){
        case ActionTypes.ADD_NEW_COFFEE_CART:
            return {
                ...state,
                coffeeCart: [...state.coffeeCart, action.payload]
            }
        default: 
            return state;
    }
}