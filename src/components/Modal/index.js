import styled from "styled-components";
import imgLoss from "../../features/images/angrymatch-loss-cartoon.png";
import imgWin from "../../features/images/angrymatch-winner-cartoon.png";

const StyledModal = styled.div`
    position: fixed;
    background-color: var(--modal-color);
    width: 40rem;
    height: 30rem;
    display: flex;
    font-family: 'Roboto Mono', monospace;
    color: var(--primary-color);
    gap: 2rem;
    align-items: center;
    padding: 1rem;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /* z-index: 1000; */
    

    div {
        /* border: 2px solid red; */
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    img {
        height: 20rem;
        
    }

    p {
        font-size: 2rem;
        
    }

    button {
        
        width: fit-content;
        background-color: var(--main-color);
        color: var(--modal-color);;
    }
`

const OverlayStyle = styled.div`
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

export function Modal(props){
    const winner = props.winner;

    function textResult(){
        let textWin = ['Você ganhou, dessa vez...', 'Deu sorte!', 'Parabéns, sua memória é boa!'];
        let textLoose = ['Você perdeu!', 'Ta prestando atenção?', 'Que azar! Não foi dessa vez...'];
        let arr;

        if(winner){
            arr = textWin
        } else arr = textLoose;

        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
        return item;
    }

    return (
        <OverlayStyle>
            <StyledModal>
                <img src={winner? imgWin : imgLoss}></img>
                <div>
                <p>{textResult()}</p>
                <button>{winner? 'Novo jogo' : 'Tente de novo'}</button>
                </div>
            </StyledModal>
        </OverlayStyle>
    )
}