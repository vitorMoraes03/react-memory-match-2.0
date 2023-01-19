import styled from "styled-components";

export const StyledModal = styled.div`
    position: fixed;
    background-color: var(--modal-color);
    width: 45rem;
    height: 30rem;
    display: flex;
    font-family: 'Roboto Mono', monospace;
    color: var(--primary-color);
    gap: 2rem;
    align-items: center;
    box-shadow: 1px 1px 20px 1px;
    border-radius: 0.5rem;
    padding: 3rem;
    z-index: 1000;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
   
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    img {
        height: 20rem;
        border-radius: 1rem;
    }

    p {
        font-size: 2.2rem;
        text-align: center;
        font-weight: 600;
        line-height: 2.2rem;
    }

    button {
        width: fit-content;
        background-color: var(--main-color);
        color: var(--modal-color);
        padding: 1rem;
        border-radius: 1rem;
        font-size: 1.2rem;
    }

    button:hover {
        cursor: pointer;
        background-color: var(--modal-color);
        color: var(--main-color);
    }
`

export const OverlayStyle = styled.div`
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        div {
            display: flex;
        }
`