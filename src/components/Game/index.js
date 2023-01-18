import { Card } from "../Card";
import { AllCards, Footer, Counter} from "./style";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { allFunctions } from "../../features/allFunctions";

export function Game(props){
    const navigate = useNavigate();
    const { cardComparision, shuffle, isSmallScreen } = allFunctions;
    const [arrayImgs, setArrayImgs] = props.arrayImgsState;
    const defaultPicks = {firstPick: undefined, secondPick: undefined};
    const [picks, setPicks] = useState(defaultPicks);
    const defaultCounterLoss = arrayImgs.length - 6;
    const [counterLoss, setCounterLoss] = useState(defaultCounterLoss);

    useEffect(() => {
        if(!picks.secondPick) return;
        setTimeout(() => {
            if(cardComparision(picks.firstPick, picks.secondPick) === false){
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
        alert('Deu sorte!');
        setCounterLoss(defaultCounterLoss);
        navigate('/');
    }

    function loose(){
        alert('Você perdeu...');
        setCounterLoss(defaultCounterLoss);
        setArrayImgs(shuffle(arrayImgs));
        arrayImgs.forEach(element => {
            element.stateFlipped.setFlipped(false);
        });
        navigate('/game');
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
        </>
    )
}