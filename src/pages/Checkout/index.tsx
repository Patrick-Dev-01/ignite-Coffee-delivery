import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react"
import { CheckoutContainer, CheckoutWrapper, InputForm, OrderBox, OrderBoxItemsContainer, OrderFormHeader, 
    OrderInputBlock, OrderItemsAside, OrderItemsWrapper, OrderPayment, OrderSection, OrderSpecs, PaymentHeader,
    PaymentMethod, PaymentMethodButton
} from "./styles";

import { CoffeeItem } from "./components/CoffeeItem";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { priceFormatter } from "../../utils/formatter";
import * as z from 'zod';
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const checkoutFormSchema = z.object({
    cep: z.string().min(8, "O CEP precisa ter 8 digiitos").max(8, "O CEP precisa ter 8 digiitos"),
    rua: z.string(),
    numero: z.coerce.number(),
    complemento: z.string().optional(),
    bairro: z.string(),
    cidade: z.string(),
    uf: z.string().min(2, 'Unidade federal é 2 digitos'),
    pagamento: z.enum(['Debito', 'Credito', 'Dinheiro'])
})

type CheckoutFormData = z.infer<typeof checkoutFormSchema>;

export function CheckOut(){
    const navigate = useNavigate();
    const [total, setTotal] = useState(0);
    const { coffeeCart, checkoutDelivery } = useContext(CartContext);
    const { register, handleSubmit, control } = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutFormSchema) 
    })

    useEffect(() => {
        setTotal(() => 
            coffeeCart.reduce((acc, c) => {
                return acc + (c.price * c.quantity);
            }, 0)
        )
    }, [coffeeCart]);

    function handleSubmitDelivery(data: CheckoutFormData){
        checkoutDelivery(data);
        navigate('/success');
    }

    return(
        <CheckoutContainer>
            <CheckoutWrapper onSubmit={handleSubmit(handleSubmitDelivery)}>
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
                                <InputForm type="text" placeholder="CEP" {...register("cep")}/>
                            </OrderInputBlock>

                            <OrderInputBlock>
                                <InputForm type="text" placeholder="Rua" width="100%" {...register("rua")}/>
                            </OrderInputBlock>

                            <OrderInputBlock>
                                <InputForm type="text" placeholder="Número" {...register("numero")}/>
                                <InputForm type="text" placeholder="Complemento" width="100%" {...register("complemento")}/>
                            </OrderInputBlock>

                            <OrderInputBlock>
                                <InputForm type="text" placeholder="Bairro" {...register("bairro")}/>
                                <InputForm type="text" placeholder="Cidade" width="276px" {...register("cidade")}/>
                                <InputForm type="text" placeholder="UF" width="60px" {...register("uf")}/>
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

                            <Controller
                                control={control}
                                name="pagamento"
                                render={({ field }) => (
                                    <PaymentMethod onValueChange={field.onChange} value={field.value}>
                                        <PaymentMethodButton value="Credito">
                                            <CreditCard size={16} color="#8047F8" />
                                            Cartão de Crédito
                                        </PaymentMethodButton>

                                        <PaymentMethodButton value="Debito">
                                            <Bank size={16} color="#8047F8" />
                                            Cartão de Débito
                                        </PaymentMethodButton>

                                        <PaymentMethodButton value="Dinheiro">
                                            <Money size={16} color="#8047F8" />
                                            Dinheiro
                                        </PaymentMethodButton>
                                    </PaymentMethod>
                                )}
                            />                            
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
                                            Confirmar Pedido
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