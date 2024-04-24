import { ReactNode, createContext, useEffect, useReducer } from "react";
import { CoffeeCart, CoffeeCartReducer } from "../reducers/CartReducer/reducer";
import { addNewCoffeeCartAction, removeCoffeeFromCartAction, updateCoffeeQuantityAction } from "../reducers/CartReducer/action";

interface CartContextType{
    coffeeCart: CoffeeCart[];
    addNewCoffeeCart: (coffee: CoffeeCart) => void;
    updateCoffeeQuantity: (title: string, quantity: number) => void;
    removeCoffeeFromCart: (title: string) => void;
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps{
    children: ReactNode;
}

export interface CoffeeCartState{
    coffeeCart: CoffeeCart[];
}

export function CartContextProvider({ children }: CartContextProviderProps){
    const [coffeeCartState, dispatch] = useReducer(CoffeeCartReducer, {
        coffeeCart: [],
    }, (initialState) => {
        const storedStateAsJSON = localStorage.getItem('@ignite-coffee-delivery:cart-state');

        if(storedStateAsJSON){
            return JSON.parse(storedStateAsJSON);
        }

        return initialState;
    });

    const { coffeeCart } = coffeeCartState;

    useEffect(() => {
        // console.log(coffeeCartState)
        const stateJSON = JSON.stringify(coffeeCartState);
        localStorage.setItem('@ignite-coffee-delivery:cart-state', stateJSON);
    }, [coffeeCartState]);

    function addNewCoffeeCart(newCoffee: CoffeeCart){
        dispatch(addNewCoffeeCartAction(newCoffee));
    }
    
    function updateCoffeeQuantity(title: string, quantity: number){
        dispatch(updateCoffeeQuantityAction(title, quantity));
    }

    function removeCoffeeFromCart(title: string){
        dispatch(removeCoffeeFromCartAction(title));
    }

    return(
        <CartContext.Provider value={{ coffeeCart, addNewCoffeeCart, updateCoffeeQuantity, removeCoffeeFromCart }}>
            { children }
        </CartContext.Provider>
    )
}