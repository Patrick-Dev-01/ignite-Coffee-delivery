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

        case ActionTypes.UPDATE_COFFEE_QUANTITY:
            return {
                ...state,
                coffeeCart: state.coffeeCart.map(coffee => {
                    if(coffee.title === action.payload.title){
                        return { ...coffee, quantity: action.payload.quantity }
                    }

                    else{
                        return coffee;
                    }
                })
            }
        case ActionTypes.REMOVE_COFFEE_FROM_CART:
            return {
                ...state,
                coffeeCart: state.coffeeCart.filter(coffee => coffee.title !== action.payload.title),
            } 

        case ActionTypes.CLEAR_CART_ON_SUCCESS:
            return {
                ...state,
                coffeeCart: [],
            }
        default: 
            return state;
    }
}