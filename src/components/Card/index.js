import { CardDiv } from "./style";
import { Front } from "./style";
import { Back } from "./style";
import { useState } from "react";

export function Card(props){
    const card = props.card;
    const picks = props.picks;
    const setPicks = props.setPicks;
    const [flipped, setFlipped] = useState(false);

    function toggleClick(){
        if(picks.secondPick) return;
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
                    src={card.urls.small} 
                    alt={card.alt_description} 
                    ></img>
                </Front>
                <Back flipped={flipped} 
                onClick={toggleClick}
                >
                </Back>
            </CardDiv>
    )
}