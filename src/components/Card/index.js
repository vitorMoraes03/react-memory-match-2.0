import { CardDiv } from "./style";
import { Front } from "./style";
import { Back } from "./style";
import { useState } from "react";

export function Card(props){
    const card = props.card;
    const [flipped, setFlipped] = useState(false);

    function toggleClick(){
        // if(picks.length > 1) return;
        setFlipped(true);
        // setPicks([...picks, {card, setRotated}]);
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