import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { CoffeeActionButton, CoffeeActions, CoffeeItemBox, CoffeeItemContainer, CoffeeShopButtonsContainer } from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";
import { priceFormatter } from "../../../../utils/formatter";

interface CoffeItemProps{
    src: string;
    title: string;
    price: number;
    quantity: number;
}

export function CoffeeItem({ src, title, price, quantity }: CoffeItemProps){
    const { updateCoffeeQuantity, removeCoffeeFromCart } = useContext(CartContext);

    function handleIncreaseQuantity(){
        updateCoffeeQuantity(title, quantity + 1);
    }

    function handleDecreaseQuantity(){
        if(quantity !== 1){
            updateCoffeeQuantity(title, quantity - 1);
        }
    }

    function handleRemoveCoffee(){
        removeCoffeeFromCart(title);
    }

    return(
        <CoffeeItemContainer>
            <CoffeeItemBox>
                <img src={src} alt="" />
                <div>
                    <p>{title}</p>
                    <CoffeeShopButtonsContainer>
                        <CoffeeActions>
                            <CoffeeActionButton type="button" onClick={handleDecreaseQuantity}>
                                <Minus size={14}/>
                            </CoffeeActionButton>
                            <p>{quantity}</p>
                            <CoffeeActionButton type="button" onClick={handleIncreaseQuantity}>
                                <Plus size={14}/>
                            </CoffeeActionButton>
                        </CoffeeActions>
                        <button type="button" onClick={handleRemoveCoffee}>
                            <Trash size={18} color="#8047F8" />
                            REMOVER
                        </button>
                    </CoffeeShopButtonsContainer>
                </div>
                <strong>{priceFormatter.format(price * quantity)}</strong>
            </CoffeeItemBox>
        </CoffeeItemContainer>
    )
}