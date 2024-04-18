import { ShoppingCart } from "phosphor-react";
import { AddCoffee, CoffeeActionButton, 
    CoffeeActions, CoffeeCardBox, CoffeeCardDescription, CoffeeCardShop, CoffeeCardTags, 
    CoffeeShopButtonsContainer 
} from "./styles";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { CoffeeCart } from "../../../../reducers/CartReducer/reducer";

export interface Coffee{
    src: string;
    tags: string[]
    title: string;
    description: string;
    price: number;
}

interface CoffeeCardProps extends Coffee{}

export function CoffeCard({ src, tags, title, description, price }: CoffeeCardProps){
    const [quantity, setQuantity] = useState(1);
    const { addNewCoffeeToCart } = useContext(CartContext);

    function handleCheckCoffeeInCart(){
        const newCoffee: CoffeeCart = {
            src,
            title,
            price,
            quantity
        }

        addNewCoffeeToCart(newCoffee);
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
                    <span>R$ { price }</span>
                    <CoffeeActions>
                        <CoffeeActionButton onClick={() => { quantity !== 1 && setQuantity(quantity - 1) }}>-</CoffeeActionButton>
                        <p>{ quantity }</p>
                        <CoffeeActionButton onClick={() => setQuantity(quantity + 1)}>+</CoffeeActionButton>
                    </CoffeeActions>
                    <AddCoffee onClick={handleCheckCoffeeInCart}>
                        <ShoppingCart size={22} weight='fill' color='#fff'/>
                    </AddCoffee>
                </CoffeeShopButtonsContainer>
            </CoffeeCardShop>
        </CoffeeCardBox>
    )
}