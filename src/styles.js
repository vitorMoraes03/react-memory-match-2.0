import { createGlobalStyle } from "styled-components";
import imgBackground from './images/backgroundimg-green-several-cards.png';

export const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }

    @font-face {
    font-family: 'Recoleta';
    src: url('./fonts/Recoleta-RegularDEMO.otf');
    }

    body {
        background-image: url(${imgBackground});
        background-size: cover;
    }    
`;