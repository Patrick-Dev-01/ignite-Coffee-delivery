import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"
import { CheckoutContainer, CheckoutWrapper, InputForm, OrderBox, OrderBoxItemsContainer, OrderFormHeader, 
    OrderInputBlock, OrderItemsAside, OrderItemsWrapper, OrderPayment, OrderSection, OrderSpecs, PaymentHeader, PaymentMethod, 
} from "./styles";

import { CoffeeItem } from "./components/CoffeeItem";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { priceFormatter } from "../../utils/formatter";

export function CheckOut(){
    const [total, setTotal] = useState(0);
    const { coffeeCart } = useContext(CartContext);

    useEffect(() => {
        setTotal(() => 
            coffeeCart.reduce((acc, c) => {
                return acc + (c.price * c.quantity);
            }, 0)
        )

        console.log(coffeeCart)
    }, [coffeeCart]);

    return(
        <CheckoutContainer>
            <CheckoutWrapper>
                <OrderBox>
                    <h3>Complete seu pedido</h3>
                    <OrderSection>
                        <OrderFormHeader>
                            <MapPinLine size={22} color="#DBAC2C"/>
                            <span>
                                <h3>Endereço de Entrega</h3>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </span>
                        </OrderFormHeader>

                        <div>
                            <OrderInputBlock>
                                <InputForm type="text" placeholder="CEP" />
                            </OrderInputBlock>

                            <OrderInputBlock>
                                <InputForm type="text" placeholder="Rua" width="100%" />
                            </OrderInputBlock>

                            <OrderInputBlock>
                                <InputForm type="text" placeholder="Número" />
                                <InputForm type="text" placeholder="Complemento" width="100%" />
                            </OrderInputBlock>

                            <OrderInputBlock>
                                <InputForm type="text" placeholder="Bairro" />
                                <InputForm type="text" placeholder="Cidade" width="276px"/>
                                <InputForm type="text" placeholder="UF" width="60px" />
                            </OrderInputBlock>
                        </div>
                    </OrderSection>

                    <OrderPayment>
                        <PaymentHeader>
                        <CurrencyDollar size={22} color="#8047F8"/>
                            <span>
                                <h3>Pagamento</h3>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar: </p>
                            </span>
                        </PaymentHeader>

                        <PaymentMethod>
                            <button type="button">
                                <CreditCard size={22} color="#8047F8" />
                                Cartão de Crédito
                            </button>
                            <button type="button">
                                <Bank size={22} color="#8047F8" />
                                Cartão de Débito
                            </button>
                            <button type="button">
                                <Money size={22} color="#8047F8" />
                                Dinheiro
                            </button>
                        </PaymentMethod>
                    </OrderPayment>
                </OrderBox>
    
                <OrderBoxItemsContainer>
                    { coffeeCart.length > 0 && (
                        <>
                            <h3>Cafés Selecionados</h3>
                            <OrderItemsAside>
                                <OrderItemsWrapper>
                                { coffeeCart.map(coffee => (
                                    <CoffeeItem 
                                        key={coffee.title}   
                                        src={coffee.src}
                                        title={coffee.title}
                                        quantity={coffee.quantity}
                                        price={coffee.price}
                                    />
                                ))}
                                </OrderItemsWrapper>
        
                                <OrderSpecs>
                                    <span>
                                        <p>Total de itens</p>
                                        <p>{priceFormatter.format(total)}</p>
                                    </span>
                                    <span>
                                        <p>Entrega</p>
                                        <p>R$ 3,50</p>
                                    </span>
                                    <span>
                                        <strong>Total</strong>
                                        <p>{priceFormatter.format(total + 3.50)}</p>
                                    </span>
        
                                        <button type="submit">
                                            <NavLink to='/success'>
                                                Confirmar Pedido
                                            </NavLink>
                                        </button>
                                </OrderSpecs>
                            </OrderItemsAside>
                        </>
                    )}
                </OrderBoxItemsContainer>
            </CheckoutWrapper>
        </CheckoutContainer>
    )
}