import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    color: var(--main-color);
    font-family: 'Roboto Mono', monospace;
    width: 40rem;
    margin: 1rem auto 0 auto;

    div {
        display: flex;
        justify-content: start;
        gap: 3px;
        align-items: center;
        width: 100%;
    }

    ion-icon {
        color: var(--main-color);
        cursor: pointer;
        font-size: 3rem;
    }

    ion-icon:hover{
        color: rgb(12, 55, 12);
    }

    label {
        font-size: 2.6rem;
        font-weight: 500;
        color: var(--secondary-color);
    }

    input {
        background-color: transparent;
        border-radius: 0.8rem;
        color: var(--secondary-color);
        border: 3px solid var(--main-color);
        font-size: 2.4rem;
        padding: 2px;
        outline: none;
        
    }

    input:hover {
        box-shadow: 0px 0px 0px 1px;
    }
`;

export const Title = styled.h1`
    font-family: 'PressStart2P';
    color: var(--main-color);
    text-align: center;
    font-size: 6rem;
    padding: 8rem;
    line-height: 8rem;

    ::before {
        content: 'Angry Match';
    }
`

