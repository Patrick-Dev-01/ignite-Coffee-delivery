import styled from "styled-components";

export const SuccessContainer = styled.main`
    width: 100%;
    padding: 0 12rem;
    display: flex;
    justify-content: space-between;
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
`;

export const SuccessSection = styled.section`
    display: flex;
    gap: 6rem;
    justify-content: space-between; 
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
        line-height: 0;
        border-radius: 50px;
        background: ${props => props.variant};
    }
`;