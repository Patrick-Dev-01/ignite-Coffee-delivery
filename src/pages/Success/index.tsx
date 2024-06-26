import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { InfoDelivery, SuccessBox, SuccessContainer, SuccessHeader, SuccessSection, SuccessWrapper } from "./styles";
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";

import delivery from '../../assets/delivery.svg';

export function Success(){
    const { checkout, clearCartOnSuccess } = useContext(CartContext);

    useEffect(() => {
        clearCartOnSuccess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return(
        <SuccessContainer>
            <SuccessWrapper>
                <SuccessHeader>
                    <h1>Uhu! Pedido Confirmado</h1>
                    <h2>Agora é só aguardar que logo o café chegará até você</h2>
                </SuccessHeader>

                <SuccessSection>
                    <SuccessBox>
                        <InfoDelivery variant="#8047F8">
                            <span>
                                <MapPin weight='fill' color="#fff" />
                            </span>
                            <div>
                                <p>Entrega na Rua {checkout.rua}, {checkout.numero}</p>
                                <p>{checkout.bairro}, {checkout.uf}</p>
                            </div>
                        </InfoDelivery>
                        <InfoDelivery variant="#DBAC2C">
                            <span>
                                <Timer weight='fill' color="#fff"/>
                            </span>
                            <div>
                                <p>Previsão de entrega</p>
                                <strong>20 min - 30 min </strong> 
                            </div>
                        </InfoDelivery>
                        <InfoDelivery variant="#C47F17"> 
                            <span>
                                <CurrencyDollar weight='fill' color="#fff" />
                            </span>
                            <div>
                                <p>Pagamento na entrega</p>
                                <strong>{ checkout.pagamento }</strong> 
                            </div>
                        </InfoDelivery>
                    </SuccessBox>

                    <aside>
                        <img src={delivery} alt="" />
                    </aside>
                </SuccessSection>
            </SuccessWrapper>
        </SuccessContainer>
    )
}