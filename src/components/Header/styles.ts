import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding: 2rem;
`;

export const HeaderContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 10rem;
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
`;

export const HeaderCart = styled.div`
    background: ${props => props.theme["yellow-100"]};
    border-radius: 6px;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;
`;