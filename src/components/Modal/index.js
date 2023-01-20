import imgLoss from "../../features/images/angrymatch-loss-cartoon.png";
import imgWin from "../../features/images/angrymatch-winner-cartoon.png";
import { useNavigate } from 'react-router-dom';
import { StyledModal, OverlayStyle } from "./style";

export function Modal(props){
    const winner = props.winner;
    const setModal = props.setModal;
    const navigate = useNavigate();

    function textResult(){
        let textWin = ['Você ganhou, dessa vez...', 'Sorte de principante!', 'Até que sua memória serve para alguma coisa!'];
        let textLoose = ['Ta prestando atenção?!', 'Você perdeu!', 'Não foi dessa vez, nem da próxima...'];
        let arr;
 
        if(winner){
            arr = textWin
        } else arr = textLoose;

        // const randomIndex = Math.floor(Math.random() * arr.length);
        // const item = arr[randomIndex];

        const item = arr[0];
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
                <button onClick={handleBtn}>{winner? 'NOVO JOGO' : 'TENTE DE NOVO'}</button>
                </div>
            </StyledModal>
        </OverlayStyle>
    )
}