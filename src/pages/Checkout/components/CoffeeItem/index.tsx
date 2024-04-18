import { CoffeeActionButton, CoffeeActions, CoffeeItemBox, CoffeeItemContainer, CoffeeShopButtonsContainer } from "./styles";

import expresso from '../../../../assets/coffees/expresso.svg';
import { Minus, Plus, Trash } from "phosphor-react";

export function CoffeeItem(){
    return(
        <CoffeeItemContainer>
            <CoffeeItemBox>
                <img src={expresso} alt="" />
                <div>
                    <p>Expresso Tradicional</p>
                    <CoffeeShopButtonsContainer>
                        <CoffeeActions>
                            <CoffeeActionButton>
                                <Minus size={14}/>
                            </CoffeeActionButton>
                            <p>1</p>
                            <CoffeeActionButton>
                                <Plus size={14}/>
                            </CoffeeActionButton>
                        </CoffeeActions>
                        <button>
                            <Trash size={18} color="#8047F8" />
                            REMOVER
                        </button>
                    </CoffeeShopButtonsContainer>
                </div>
                <strong>R$ 9,90</strong>
            </CoffeeItemBox>
        </CoffeeItemContainer>
    )
}