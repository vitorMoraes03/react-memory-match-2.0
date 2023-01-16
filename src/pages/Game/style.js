import styled from "styled-components";

export const AllCards = styled.div`
    width: 120px;
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(6, 140px);
    grid-template-rows: repeat(3, 140px);
    gap: 10px;
    justify-content: center;
    width: 100%;
`

export const Counter = styled.div`
    right: 30px;
    position: absolute;
    font-family: 'PressStart2P';
    color: rgb(22, 71, 22);
    font-size: 25px;
    font-weight: 600;
`