import styled from "styled-components";

export const Form = styled.form`
    text-align: center;
    display: flex;
    justify-content: center;
    gap: 6px;
    color: rgb(22, 71, 22);

    div {
        display: flex;
        flex-direction: column; 
    }

    button {
        border-radius: 8px;
        padding: 4px;
        height: fit-content;
    }

    input {
        background-color: transparent;
        border-radius: 8px;
        font-size: 20px;
        padding: 1px;
    }
    
    label {
        display: flex;
        flex-direction: column;
        align-items: start;
    }
`;

