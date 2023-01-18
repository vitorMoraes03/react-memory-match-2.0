import styled from "styled-components";
import imgLoss from "../../features/images/angrymatch-loss-cartoon.png";
import imgWinner from "../../features/images/angrymatch-winner-cartoon.png";

const StyledModal = styled.div`
    position: absolute;
    background-color: white;
    width: 40rem;
    height: 30rem;

    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
        width: 10rem;
    }
`

export function Modal(props){
    const result = props.result;
    // 'winner' 'looser'

    return (
        <StyledModal>
            {result === 'winner' ? <img src={imgWinner}></img> : <img src={imgLoss}></img>}
            
            <p></p>
            <button></button>
        </StyledModal>
    )
}