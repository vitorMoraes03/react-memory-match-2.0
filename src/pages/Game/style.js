import styled from "styled-components";

export const AllCards = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 150px);
    grid-template-rows: repeat(3, 150px);
    gap: 15px;
    height: 90%;
    justify-content: center;
    align-content: center;

    span {
        grid-column: 1;
        grid-row: 3;
        width: 100%;
        height: 100%;
    }
`

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 15px;

    div {
        font-family: 'PressStart2P';
        color: var(--main-color);
        font-size: 25px;
        font-weight: 600;
    }
`