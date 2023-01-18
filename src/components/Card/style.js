import styled from "styled-components";
import imgBack from "../../features/images/interrogation-cartoon-angry.png"

export const CardDiv = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

export const Front = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    transition: transform 0.5s;
    border-radius: 0.6rem;
    transform: ${({ flipped }) => 
        flipped  === false ? 'rotateY(180deg)' : 'none'};

    img {
        width: 100%;
        height: 100%;
    }
`

export const Back = styled(Front)`
    background-image: url(${imgBack});
    background-size: cover;
    transform: ${({ flipped }) => 
        flipped  === false ? 'none' : 'rotateY(180deg)'};
`