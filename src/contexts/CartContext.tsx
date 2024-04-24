import { ReactNode, createContext, useEffect, useReducer, useState } from "react";
import { CoffeeCart, CoffeeCartReducer } from "../reducers/CartReducer/reducer";
import { addNewCoffeeCartAction, clearCartOnSuccessAction, removeCoffeeFromCartAction, updateCoffeeQuantityAction } from "../reducers/CartReducer/action";

interface Checkout{
    cep: string;
    rua: string;
    numero: number;
    complemento?: string;
    bairro: string;
    cidade: string;
    uf: string;
    pagamento: string;
}

interface CartContextType{
    coffeeCart: CoffeeCart[];
    checkout: Checkout;
    addNewCoffeeCart: (coffee: CoffeeCart) => void;
    updateCoffeeQuantity: (title: string, quantity: number) => void;
    removeCoffeeFromCart: (title: string) => void;
    checkoutDelivery: (checkout: Checkout) => void;
    clearCartOnSuccess: () => void;
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps{
    children: ReactNode;
}

export interface CoffeeCartState{
    coffeeCart: CoffeeCart[];
}

export function CartContextProvider({ children }: CartContextProviderProps){
    const [checkout, setCheckout] = useState<Checkout>({} as Checkout);
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

    function clearCartOnSuccess(){
        dispatch(clearCartOnSuccessAction());
    }

    function checkoutDelivery(checkout: Checkout){
        setCheckout(checkout);
    }

    return(
        <CartContext.Provider value={{ coffeeCart, checkout, clearCartOnSuccess,
            addNewCoffeeCart, updateCoffeeQuantity, removeCoffeeFromCart, checkoutDelivery 
        }}>
            { children }
        </CartContext.Provider>
    )
}