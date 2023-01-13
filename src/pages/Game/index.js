import { Title } from "../../styles";
import { Card } from "../../components/Card";
import { AllCards } from "./style";
import { useEffect, useState } from "react";

export function Game(props){
    const arrayImgs = props.arrayImgs;
    const defaultPicks = {
        firstPick: undefined, 
        secondPick: undefined}
    const [picks, setPicks] = useState(defaultPicks);

    function cardComparision(firstPick, secondPick){
        return firstPick.card.id === secondPick.card.id ? 
            (//setcountwin
            firstPick.setFlipped(true),
            secondPick.setFlipped(true)):
            (//setcountloss
            firstPick.setFlipped(false),
            secondPick.setFlipped(false))
    }

    useEffect(() => {
        if(!picks.secondPick) return;
        setTimeout(() => {
            cardComparision(picks.firstPick, picks.secondPick);
            setPicks(defaultPicks);
        }, 600);    
    }, [picks]);

    return (
        <>
            <Title/>
            <AllCards>
                {arrayImgs.map(element => {
                    return <Card 
                                card={element} 
                                picks={picks} 
                                setPicks={setPicks}>
                           </Card>;
                })} 
            </AllCards>
        </>
    )
}