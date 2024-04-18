import styled from "styled-components";

export const MainContainer = styled.main`
    width: 100%;
    padding: 0 12rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 7rem;
`;

export const ArticleIntroduction = styled.article`
    display: flex;
    gap: 1rem;
`; 

export const CoffeePresentation = styled.section`
    width: 90%;
    text-align: left;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1{
        font-family: 'baloo 2';
        line-height: 1.5;
        font-size: 3rem;
    }

    h2{
        font-family: 'Roboto';
        font-size: 1rem;
        color: ${props => props.theme["gray-700"]};
    }
`;

export const DeliveryCares = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;
`;

interface DeliveryProcessProps{
    variant: string;
}

export const DeliveryProcess = styled.div<DeliveryProcessProps>`    
    display: flex;
    align-items: center;
    gap: 0.5rem;

    span{
        background: ${props => props.variant};
        border-radius: 60px;
        padding: 0.5rem;
        line-height: 0;
    }

    p{
        color: ${props => props.theme["gray-700"]};
        font-size: 0.85rem;
    }
`;

export const CoffeesSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;

    margin-top: 10rem;

    h1{
        font-family: 'baloo 2';
        color: ${props => props.theme["gray-800"]};
    }
`;

export const CoffeeMixes = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    margin: 3rem auto;
`;
