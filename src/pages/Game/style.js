import styled from "styled-components";

export const AllCards = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 150px);
    grid-template-rows: repeat(3, 150px);
    gap: 15px;
    height: 90%;
    justify-content: center;
    align-content: center;
`

export const Counter = styled.div`
    right: 30px;
    position: absolute;
    font-family: 'PressStart2P';
    color: var(--main-color);
    font-size: 25px;
    font-weight: 600;
`

export const Footer = styled.div`
    display: flex;
`
export const Span = styled.div`
    grid-column: 1;
    grid-row: 3;
    width: 100%;
    height: 100%;
`