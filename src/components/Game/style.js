import styled from "styled-components";

export const AllCards = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 15rem);
    grid-template-rows: repeat(3, 15rem);
    gap: 1.5rem;
    padding: 4rem;
    justify-content: center;
    align-content: center;

    @media (max-width: 600px){
        grid-template-columns: repeat(3, 12.5rem);
        grid-template-rows: repeat(5, 12.5rem);
    }
`

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1.5rem;

    div {
        font-family: 'PressStart2P';
        color: var(--main-color);
        font-size: 2.5rem;
        font-weight: 600;
    }
`

export const Counter = styled.div`
        font-family: 'PressStart2P';
        color: var(--main-color);
        font-weight: 600;

        @media (max-width: 600px){
            display: inline-block;
            grid-column: 3;
            grid-row: 5;
            text-align: center;
            padding: 3rem 0;
            line-height: 3rem;
            font-size: 2.2rem;
        }
`
