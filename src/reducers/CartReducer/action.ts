import { CoffeeCart } from "./reducer";

export enum ActionTypes{
    ADD_NEW_COFFEE_CART = 'ADD_NEW_COFFEE_CART',
    UPDATE_QUANTITY = 'UPDATE_QUANTITY',
    REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
}

export function addNewCoffeeToCartAction(newCoffee: CoffeeCart){
    return {
        type: ActionTypes.ADD_NEW_COFFEE_CART,
        payload: newCoffee
    }
}