import { Title } from "../../styles";
import { Card } from "../../components/Card";
import { AllCards } from "./style";

export function Game(props){
    const arrayImgs = props.arrayImgs;

    return (
        <>
            <Title/>
            <AllCards>
                {arrayImgs.map(element => {
                    return <Card card={element}></Card>;
                })} 
            </AllCards>
        </>
    )
}