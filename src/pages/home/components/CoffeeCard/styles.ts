import styled from "styled-components";


export const CoffeeCardBox = styled.div`
    background: ${props => props.theme["gray-200"]};
    border-top-left-radius: 6px;
    border-top-right-radius: 36px;
    
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 36px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;

    img{
        transform: translateY(-20%);
    }
`;

export const CoffeeCardTags = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    span{
        background: ${props => props.theme["yellow-100"]};
        color: ${props => props.theme["yellow-800"]};
        padding: 0.4rem;
        font-size: 0.60rem;
        border-radius: 25px;
        text-transform: uppercase;
        font-weight: bold;
    }
`;

export const CoffeeCardDescription = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;

    p{
        color: ${props => props.theme["gray-600"]};
    }
`;

export const CoffeeCardShop = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    text-align: center;
    gap: 1rem;
`;

export const CoffeeShopButtonsContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 1rem auto;

    span{
        font-family: "baloo 2";
        color: ${props => props.theme["gray-700"]};
        font-weight: bold;
        font-size: 1.5rem;
    }
`;

export const CoffeeActions = styled.div`
    width: 72px;
    height: 38px;
    background: ${props => props.theme["gray-400"]};
    padding: 0 1rem;
    border-radius: 6px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
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

export const AddCoffee = styled.button`
    width: 38px;
    height: 38px;
    line-height: 0;
    outline: none;
    background: ${props => props.theme["purple-500"]};
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    
    &:hover{
        transition: background-color 0.2s;
        background: ${props => props.theme["purple-900"]};
    }
`;