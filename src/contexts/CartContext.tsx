import { ReactNode, createContext, useEffect, useReducer } from "react";
import { CoffeeCart, CoffeeCartReducer, cartReducer } from "../reducers/CartReducer/reducer";
import { addNewCoffeeToCartAction } from "../reducers/CartReducer/action";

interface CartContextType{
    coffeeCart: CoffeeCart[] 
    addNewCoffeeToCart: (coffee: CoffeeCart) => void;
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
        coffeeCart: []
    });

    const { coffeeCart } = coffeeCartState;

    useEffect(() => {
        console.log(coffeeCartState)
    }, [coffeeCartState]);

    function addNewCoffeeToCart(newCoffee: CoffeeCart){
        dispatch(addNewCoffeeToCartAction(newCoffee));
    }

    return(
        <CartContext.Provider value={{ coffeeCart, addNewCoffeeToCart }}>
            { children }
        </CartContext.Provider>
    )
}