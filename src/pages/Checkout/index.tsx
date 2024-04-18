import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"
import { CheckoutContainer, CheckoutWrapper, InputForm, OrderBox, OrderBoxItemsContainer, OrderFormHeader, 
    OrderInputBlock, OrderItemsAside, OrderItemsWrapper, OrderPayment, OrderSection, OrderSpecs, PaymentHeader, PaymentMethod, 
} from "./styles";

import { CoffeeItem } from "./components/CoffeeItem";
import { NavLink } from "react-router-dom";

export function CheckOut(){
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
                    <h3>Cafés Selecionados</h3>
                    <OrderItemsAside>
                        <OrderItemsWrapper>
                           <CoffeeItem />
                           <CoffeeItem />
                        </OrderItemsWrapper>

                        <OrderSpecs>
                            <span>
                                <p>Total de itens</p>
                                <p>R$ 9,90</p>
                            </span>
                            <span>
                                <p>Entrega</p>
                                <p>R$ 3,50</p>
                            </span>
                            <span>
                                <strong>Total</strong>
                                <p>R$ 33,20</p>
                            </span>

                                <button type="submit">
                                    <NavLink to='/success'>
                                        Confirmar Pedido
                                    </NavLink>
                                </button>
                        </OrderSpecs>
                    </OrderItemsAside>
                </OrderBoxItemsContainer>
            </CheckoutWrapper>
        </CheckoutContainer>
    )
}