import { Card } from "../Card";
import { AllCards, Footer, Counter} from "./style";
import { useEffect, useState } from "react";
import { allFunctions } from "../../features/allFunctions";
import Modal from "../Modal";

export function Game(props){
    const { cardEquality, shuffle, isSmallScreen } = allFunctions;
    const [arrayImgs, setArrayImgs] = props.arrayImgsState;
    const defaultPicks = {firstPick: undefined, secondPick: undefined};
    const defaultCounterLoss = arrayImgs.length - 6;
    const defaultFlipTime = 700;
    const [picks, setPicks] = useState(defaultPicks);
    const [counterLoss, setCounterLoss] = useState(defaultCounterLoss);
    const [modal, setModal] = useState({open: false, winner: undefined});
    
    useEffect(() => {
        if(!picks.secondPick) return;

        setTimeout(() => {
            if(!cardEquality(picks.firstPick, picks.secondPick)){
                picks.firstPick.setFlipped(false);
                picks.secondPick.setFlipped(false);
                setCounterLoss(counterLoss - 1);
            }
            setPicks(defaultPicks);
        }, defaultFlipTime);      
    }, [picks]);

    useEffect(() => {
        setTimeout(() => {
            checkGameFinish();
        }, defaultFlipTime);
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
        setCounterLoss(defaultCounterLoss);
    }

    function loose(){
        setModal({open: true, winner: false});
        setCounterLoss(defaultCounterLoss);
        setArrayImgs(shuffle(arrayImgs));
        arrayImgs.forEach(element => {
            element.stateFlipped.setFlipped(false);
        });
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
            {modal.open === true ? <Modal winner={modal.winner} setModal={setModal}/> : null}
        </>
    )
}