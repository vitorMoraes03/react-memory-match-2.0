import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import imgBackground from './features/images/backgroundimg-green-several-cards.png'
import PressStart2P from '../src/features/fonts/PressStart2P.woff';
import PressStart2P_2 from '../src/features/fonts/PressStart2P.woff2';

export const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    --main-color: rgb(22, 71, 22);
    --secondary-color: rgb(12, 61, 12);
    --modal-color: rgb(219, 235, 220);
    }

    html, body {
        height: 100%;
    }

    @font-face {
    font-family: 'PressStart2P';
    src: local(PressStart2P), local(PressStart2P_2),
    url(${PressStart2P}) format('woff'),
    url(${PressStart2P_2}) format('woff2');
    font-weight: 500;
    font-style: normal;
    }

    body {
        background-image: url(${imgBackground});
        background-size: cover;
    }

    html {
        font-size: 62.5%;
    }
    
    @media (max-width: 600px){
        body {
        background-size: auto;
    }

        html {
            font-size: 42.5%;
        }
}
`;

export const Container = styled.div`
    height: 100%;
`
