import styled from "styled-components";

export const CoffeeItemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    &::after{
        content: "";
        width: 100%;
        height: 2px;
        background-color: ${props => props.theme["gray-500"]};
        margin: 1rem auto;
    }
`;

export const CoffeeItemBox = styled.div`
    display: flex;
    gap: 1rem;

    img{
        width: 64px;
        height: 64px;
    }

    strong{
        font-size: 1rem;
        font-family: 'baloo 2';
        color: ${props => props.theme["gray-700"]};
    }
`;

export const CoffeeShopButtonsContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin: 1rem auto;

    span{
        font-family: "baloo 2";
        color: ${props => props.theme["gray-700"]};
        font-weight: bold;
        font-size: 1.5rem;
    }

    button{
        height: 38px;
        padding: 0.5rem;
        border: 0;
        border-radius: 6px;
        background: ${props => props.theme["gray-400"]};
        cursor: pointer;
        font-size: 0.75rem;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }
`;

export const CoffeeActions = styled.div`
    background: ${props => props.theme["gray-400"]};
    border-radius: 6px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
`; 

export const CoffeeActionButton = styled.button`
    outline: none;
    background: transparent;
    color: ${props => props.theme["purple-500"]};
    border: 0;
    cursor: pointer;
    font-size: 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`; 
