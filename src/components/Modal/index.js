import imgLoss from "../../features/images/angrymatch-loss-cartoon.png";
import imgWin from "../../features/images/angrymatch-winner-cartoon.png";
import { useNavigate } from 'react-router-dom';
import { StyledModal, OverlayStyle } from "./style";

export function Modal(props){
    const winner = props.winner;
    const setModal = props.setModal;
    const navigate = useNavigate();

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

    function handleBtn(){
        winner? navigate ('/') : navigate('/game');
        setModal({open: false, winner: undefined});
    }

    return (
        <OverlayStyle>
            <StyledModal>
                <img src={winner? imgWin : imgLoss} 
                alt={winner? 'cartoon character winner' : 'cartoon character looser'}></img>
                <div>
                <p>{textResult()}</p>
                <button onClick={handleBtn}>{winner? 'Novo jogo' : 'Tente de novo'}</button>
                </div>
            </StyledModal>
        </OverlayStyle>
    )
}