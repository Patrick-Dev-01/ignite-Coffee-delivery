import { ShoppingCart } from "phosphor-react";
import { AddCoffee, CoffeeActionButton, 
    CoffeeActions, CoffeeCardBox, CoffeeCardDescription, CoffeeCardShop, CoffeeCardTags, 
    CoffeeShopButtonsContainer 
} from "./styles";

interface CoffeCardProps{
    src: string;
    tags: string[]
    title: string;
    description: string;
    price: number;
}

export function CoffeCard({ src, tags, title, description, price  }: CoffeCardProps){
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
                        <CoffeeActionButton>-</CoffeeActionButton>
                        <p>1</p>
                        <CoffeeActionButton>+</CoffeeActionButton>
                    </CoffeeActions>
                    <AddCoffee>
                        <ShoppingCart size={22} weight='fill' color='#fff'/>
                    </AddCoffee>
                </CoffeeShopButtonsContainer>
            </CoffeeCardShop>
        </CoffeeCardBox>
    )
}