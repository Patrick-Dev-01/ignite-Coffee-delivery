import styled from "styled-components";

export const SuccessContainer = styled.main`
    width: 100%;
    padding: 0 12rem;
    display: flex;
    justify-content: space-between;

    
    @media (max-width: 768px){
        padding: 0 7rem;
    }

    @media (max-width: 426px){
        padding: 3rem;
    }
`;

export const SuccessWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    margin-top: 4rem;
`;

export const SuccessHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h1{
        color: ${props => props.theme["yellow-800"]};
        font-family: "baloo 2";
    }

    h2{
        color: ${props => props.theme["gray-700"]};
        font-weight: 100;
    }

    
    @media (max-width: 768px){
        h1{
            font-size: 1.5rem;
        }

        h2{
            font-size: 0.75rem;
        }
    }
`;

export const SuccessSection = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 6rem;

    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
    }

    aside img{
        width: 300px;
        height: 300px;
    }
`;

export const SuccessBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    border-top-left-radius: 6px;
    border-top-right-radius: 36px;    
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 36px;

    border-width: 1px;
    border-style: solid;
    padding: 3rem;
`;

interface InfoDeliveryProps{
    variant: string; 
}

export const InfoDelivery = styled.div<InfoDeliveryProps>`
    align-self: flex-start;

    display: flex;
    align-items: center;
    gap: 1rem;

    span{
        padding: 0.5rem;
        font-size: 0.75rem;
        line-height: 0;
        border-radius: 50px;
        background: ${props => props.variant};
    }

    div{
        font-size: 0.75rem;
    }
`;