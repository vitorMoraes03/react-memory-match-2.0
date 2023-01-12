export function Game(props){
    const arrayImgs = props.arrayImgs;

    return (
        <>
            {arrayImgs.map(element => {
                console.log(element);
            })} 
            
        </>
    )
}