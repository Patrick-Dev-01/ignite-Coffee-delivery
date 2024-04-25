import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding: 2rem;
`;

export const HeaderContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 10rem;

    a{
        text-decoration: none;
        line-height: 0;
    }

    @media (max-width: 768px){
        padding: 0 5rem;
    }

    @media (max-width: 426px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
`;

export const HeaderInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const HeaderLocation = styled.div`
    background: ${props => props.theme["purple-100"]};
    color: ${props => props.theme["purple-900"]};
    padding: 0.5rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 426px){
        font-size: 0.80rem;
    }
`;

export const HeaderCart = styled.div`
    background: ${props => props.theme["yellow-100"]};
    border-radius: 6px;
    padding: 0.5rem;
    line-height: 0;
    position: relative;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    span{
        width: 10px;
        background: ${props => props.theme["yellow-800"]};
        color: #fff;
        font-size: 0.90rem;
        padding: 0.8rem;
        border-radius: 60px;
        position: absolute;
        top: -10px;
        right: -15px;
        display: flex;
        justify-content: center;
        align-self: center;
        font-weight: bold;
    }
`;