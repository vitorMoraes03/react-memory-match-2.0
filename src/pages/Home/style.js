import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 6px;
    color: var(--main-color);
    font-family: 'Roboto Mono', monospace;
    width: 30%;
    margin: 10px auto 0 auto;

    div {
        display: flex;
        justify-content: start;
        gap: 3px;
        align-items: center;
    }

    ion-icon {
        color: var(--main-color);
        cursor: pointer;
        font-size: 30px;
    }

    ion-icon:hover{
        color: rgb(42, 91, 42);
    }

    label {
        font-size: 26px;
        font-weight: 500;
        color: var(--secondary-color);
    }

    input {
        background-color: transparent;
        border-radius: 8px;
        color: var(--secondary-color);
        border: 2px solid var(--main-color);
        font-size: 24px;
        padding: 2px;
        outline: none;
    }
`;

export const Title = styled.h1`
    font-family: 'PressStart2P';
    font-size: ${props => props.fontSize};
    padding: ${props => props.padding};
    color: var(--main-color);
    text-align: center;
    font-size: 60px;
    padding: 80px;

    ::before {
        content: 'Angry Match';
    }
`

