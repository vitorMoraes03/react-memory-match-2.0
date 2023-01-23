import styled from "styled-components";

export const FormStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--main-color);
    font-family: 'Roboto Mono', monospace;
    width: 40rem;
    margin: 1rem auto 0 auto;

    div {
        display: flex;
        justify-content: center;
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
        font-size: 2.8rem;
        letter-spacing: -2px;
        color: var(--secondary-color);
        text-align: center;
    }

    input {
        background-color: transparent;
        border-radius: 0.8rem;
        color: var(--secondary-color);
        border: 3px solid var(--main-color);
        font-size: 2.6rem;
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

export const ModalSearch = styled.div`
    position: fixed;
    background-color: var(--modal-color);
    width: 45rem;
    height: 30rem;
    font-family: 'Roboto Mono', monospace;
    color: var(--primary-color);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 1px 1px 20px 1px;
    border-radius: 0.5rem;
    padding: 3rem;
    z-index: 1000;

    div {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        text-align: center;
        align-items: center;
        gap: 2rem;
    }

    p {
        font-size: 2.3rem;
        line-height: 2.2rem; 
        letter-spacing: -2px;
    }

    button {
        width: 4.5rem;
        background-color: var(--main-color);
        color: var(--modal-color);
        padding: 1rem;
        border-radius: 1rem;
        font-size: 1.4rem;
        font-weight: 600;
    }

    button:hover {
        cursor: pointer;
        background-color: var(--modal-color);
        color: var(--main-color);
    }
`

export const IconsMedia = styled.div`
    display: inline-block;
    position: absolute;
    bottom: 0;
    padding: 1rem;
    
    a {
        color: var(--main-color);
        padding: 2px;
    }

    ion-icon {
        font-size: 2rem;
    }
`
