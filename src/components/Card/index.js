import { CardDiv, Front, Back } from "./style";
import { useState } from "react";

export function Card(props){
    const card = props.card;
    const counterLoss = props.counterLoss;
    const picks = props.picks;
    const setPicks = props.setPicks;
    const [flipped, setFlipped] = useState(false);

    card.stateFlipped = {
        flipped,
        setFlipped
    }
    
    function toggleClick(){
        if(picks.secondPick || flipped === true || counterLoss === 0) return;

        setFlipped(true);
        !picks.firstPick ? 
        setPicks({...picks, firstPick: {card, setFlipped}}): 
        setPicks({...picks, secondPick: {card, setFlipped}
        });
    }

    return (
            <CardDiv>
                <Front flipped={flipped}>
                    <img 
                    src={card.urls} 
                    alt={card.alt_description} 
                    ></img>
                </Front>
                <Back 
                flipped={flipped} 
                onClick={toggleClick}
                >
                </Back>
            </CardDiv>
    )
}