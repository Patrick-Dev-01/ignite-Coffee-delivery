import styled from "styled-components";

export const CheckoutContainer = styled.main`
    width: 100%;
    padding: 0 12rem;
`;

export const CheckoutWrapper = styled.form`
    width: 100%;
    display: flex;
    gap: 2rem;
    margin-top: 2.5rem;
`;

export const OrderBox = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3{
        font-family: 'baloo 2';
    }
`;

export const OrderSection = styled.section`
    background: ${props => props.theme["gray-200"]};
    padding: 3rem 3rem 1rem 3rem;

    display: flex;
    flex-direction: column;

    border-radius: 6px;
`;

export const OrderFormHeader = styled.header`
    display: flex;
    gap: 1rem;

    span{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        color: ${props => props.theme["gray-800"]};
        font-size: 0.75rem;
    }
`;

export const OrderInputBlock = styled.div`
   display: flex;
   gap: 1rem;
   margin: 1rem auto;
`;

interface InputFormProps{
    width?: string;
}

export const InputForm = styled.input<InputFormProps>`
    width: ${props => props.width !== '' ? props.width : '200px'};
    padding: 1rem;
    border: 0;
    border-radius: 6px;
    background: ${props => props.theme['gray-300']};
`;

export const OrderPayment = styled.section`
    background: ${props => props.theme["gray-200"]};
    padding: 3rem;
    border-radius: 6px;
    margin-bottom: 3rem;

    display: flex;
    flex-direction: column;
`;

export const PaymentHeader = styled.header`
    display: flex;
    gap: 1rem;

    span{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
        color: ${props => props.theme["gray-800"]};
        font-size: 0.75rem;
    }
`;

export const PaymentMethod = styled.div`
    margin: 2rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    button{
        flex: 1;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: ${props => props.theme['gray-300']};
        color: ${props => props.theme['gray-700']};;
        border: 0;
        border-radius: 6px;
        padding: 1rem;
        text-transform: uppercase;
        font-size: 0.75rem;
        cursor: pointer;
    }
`;

// itens no carrinho

export const OrderBoxItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    h3{
        font-size: 1rem;
        font-family: 'baloo 2';
    }
`;

export const OrderItemsAside = styled.aside`
    background: ${props => props.theme["gray-300"]};
    padding: 3rem;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-top-left-radius: 6px;
    border-top-right-radius: 44px;

    border-bottom-left-radius: 44px;
    border-bottom-right-radius: 6px;
`;

export const OrderItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const OrderSpecs = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1.2rem;

    span{
        display: flex;
        justify-content: space-between;
        font-size: 0.90rem;
    }

    span:last-child{
        font-size: 1.1rem;
    }

    button{
        height: 46px;
        font-size: 0.80rem;
        margin-top: 1.2rem;
        background: ${props => props.theme["yellow-500"]};
        border: 0;
        border-radius: 6px;
        color: ${props => props.theme.white};
        text-transform: uppercase;
        cursor: pointer;

        &:hover{
            transition: background-color 0.2s;
            background: ${props => props.theme["yellow-800"]};
        }
    }
`;
