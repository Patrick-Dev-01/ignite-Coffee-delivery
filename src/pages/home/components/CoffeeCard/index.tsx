import { ShoppingCart } from "phosphor-react";
import { AddCoffee, CoffeeActionButton, 
    CoffeeActions, CoffeeCardBox, CoffeeCardDescription, CoffeeCardShop, CoffeeCardTags, 
    CoffeeShopButtonsContainer 
} from "./styles";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { CoffeeCart } from "../../../../reducers/CartReducer/reducer";
import { priceFormatter } from "../../../../utils/formatter";

interface CoffeeCardProps{
    src: string;
    tags: string[]
    title: string;
    description: string;
    price: number;
}

export function CoffeCard({ src, tags, title, description, price }: CoffeeCardProps){
    const [quantity, setQuantity] = useState(1);
    const { coffeeCart, addNewCoffeeCart, updateCoffeeQuantity } = useContext(CartContext);

    function handleCheckCoffeeCart(){
        const isCoffeeAlreadyAdded = coffeeCart.find(coffee => coffee.title === title);

        if(isCoffeeAlreadyAdded){
            updateCoffeeQuantity(title, quantity);
        }

        else{
            const newCoffee: CoffeeCart = {
                src,
                title,
                price,
                quantity
            }
    
            addNewCoffeeCart(newCoffee);
        }
    }

    return(
        <CoffeeCardBox>
            <img src={src} alt="" />

            <CoffeeCardTags>
                { tags.map(tag => (
                    <>
                        <span>{ tag }</span>
                    </>
                ))}
            </CoffeeCardTags>

            <CoffeeCardDescription>
                <strong>{ title }</strong>
                <p>{ description }</p>
            </CoffeeCardDescription>

            <CoffeeCardShop>

                <CoffeeShopButtonsContainer>
                    <span>{priceFormatter.format(price)}</span>
                    <CoffeeActions>
                        <CoffeeActionButton onClick={() => { quantity !== 1 && setQuantity(quantity - 1) }}>-</CoffeeActionButton>
                        <p>{ quantity }</p>
                        <CoffeeActionButton onClick={() => setQuantity(quantity + 1)}>+</CoffeeActionButton>
                    </CoffeeActions>
                    <AddCoffee onClick={handleCheckCoffeeCart}>
                        <ShoppingCart size={22} weight='fill' color='#fff'/>
                    </AddCoffee>
                </CoffeeShopButtonsContainer>
            </CoffeeCardShop>
        </CoffeeCardBox>
    )
}