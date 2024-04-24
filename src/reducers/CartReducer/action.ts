import { CoffeeCart } from "./reducer";

export enum ActionTypes{
    ADD_NEW_COFFEE_CART = 'ADD_NEW_COFFEE_CART',
    UPDATE_COFFEE_QUANTITY = 'UPDATE_COFFEE_QUANTITY',
    REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
    CLEAR_CART_ON_SUCCESS = 'CLEAR_CART_ON_SUCCESS'
}

export function addNewCoffeeCartAction(newCoffee: CoffeeCart){
    return {
        type: ActionTypes.ADD_NEW_COFFEE_CART,
        payload: newCoffee
    }
}

export function updateCoffeeQuantityAction(title: string, quantity: number){
    return {
        type: ActionTypes.UPDATE_COFFEE_QUANTITY,
        payload: {
            title,
            quantity 
        }
    }
}

export function removeCoffeeFromCartAction(title: string){
    return {
        type: ActionTypes.REMOVE_COFFEE_FROM_CART,
        payload: {
            title 
        }
    }
}

export function clearCartOnSuccessAction(){
    return {
        type: ActionTypes.CLEAR_CART_ON_SUCCESS,
        payload: {}
    }
}