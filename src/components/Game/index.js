import { Card } from "../Card";
import { AllCards, Footer, Counter} from "./style";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { allFunctions } from "../../features/allFunctions";
import { Modal } from "../Modal";

export function Game(props){
    const navigate = useNavigate();
    const { cardComparision, shuffle, isSmallScreen, rotateCard } = allFunctions;
    const [arrayImgs, setArrayImgs] = props.arrayImgsState;
    const defaultPicks = {firstPick: undefined, secondPick: undefined};
    const [picks, setPicks] = useState(defaultPicks);
    // const defaultCounterLoss = arrayImgs.length - 6;
    const defaultCounterLoss = 2;
    const [counterLoss, setCounterLoss] = useState(defaultCounterLoss);
    const [modal, setModal] = useState({open: false, winner: undefined});

    useEffect(() => {
        if(!picks.secondPick) return;

        setTimeout(() => {
            if(cardComparision(picks.firstPick, picks.secondPick) === false){
                rotateCard(picks.firstPick, picks.secondPick, false)
                setCounterLoss(counterLoss - 1);
            }
            setPicks(defaultPicks);
        }, 600);      
    }, [picks]);

    useEffect(() => {
        setTimeout(() => {
            checkGameFinish();
        }, 600);
    }, [picks])

    function checkGameFinish(){
        if(counterLoss === 0){
            loose();
        }

        let res = [];
        arrayImgs.forEach(element => {
                res.push(element.stateFlipped.flipped)
        });

        if(!res.includes(false)){
            win();
        }
    }

    function win(){
        setModal({open: true, winner: true});
        // alert('Deu sorte!');
        setCounterLoss(defaultCounterLoss);
        // navigate('/');
    }

    function loose(){
        setModal({...modal, open: true});
        // alert('Você perdeu...');
        setCounterLoss(defaultCounterLoss);
        setArrayImgs(shuffle(arrayImgs));
        arrayImgs.forEach(element => {
            element.stateFlipped.setFlipped(false);
        });
        // navigate('/game');
    }

    return (
        <>
            <AllCards>
                {arrayImgs.map(element => {
                    return <Card 
                            card={element} 
                            picks={picks} 
                            setPicks={setPicks}
                            key={`${element.id}-${element.key_arr}`}
                            counterLoss={counterLoss}
                            />;
                })} 
            {isSmallScreen() === true ? <Counter>Lifes {counterLoss}</Counter> : null}
            </AllCards>
            {isSmallScreen() === false ? 
                (<Footer>
                    <div>Angry Match</div>
                    <Counter>Lifes {counterLoss}</Counter>
                </Footer>)
                 :
                null
                }
            {/* <button onClick={() => setModal({open: true, result: 'winner'})}>Open Modal</button> */}
            {modal.open === true ? <Modal winner={modal.winner}/> : null}
        </>
    )
}