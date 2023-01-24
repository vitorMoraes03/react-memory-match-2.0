import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FormStyle, Title, ModalSearch, IconsMedia } from "./style";
import { allFunctions } from "../../features/allFunctions";
import { OverlayStyle } from "../Modal/style";

export function Home(props){
    const [searchInput, setSearchInput] = useState([]);
    const { duplicateArr, isSmallScreen, loadApi } = allFunctions;
    const setArrayImgs = props.setArrayImgs;
    const navigate = useNavigate();
    const inputFocusRef = useRef(null);
    const [modalSearch, setModalSearch] = useState(false);

    function handleChange(e){
        setSearchInput(e.target.value);
    }

    async function handleSubmit(e){
        e.preventDefault();
        if(!searchInput){inputFocusRef.current.focus();
            return}

        let searchAmount = 9;
        if(isSmallScreen() === true) searchAmount = 7;

        let res = await loadApi(searchInput, searchAmount);
        if(res.length < searchAmount){
            setModalSearch(true);
            setSearchInput('');
            inputFocusRef.current.focus();
            return
        }
        setArrayImgs(duplicateArr(res));
        navigate('/game');
    }   

    return (
        <>
        <Title/>
        <FormStyle>
            <form onSubmit={handleSubmit}>
            <div>
                <input 
                onChange={handleChange} value={searchInput} 
                maxLength={15} ref={inputFocusRef}
                ></input>
                <ion-icon 
                name="search" 
                onClick={handleSubmit} 
                ></ion-icon>
            </div>
            <label>
                <p>
                Bem vindo ao Angry Match um jogo da memória 
                onde você pode escolher as imagens das suas cartas.
                </p>
                <p>
                Digite um tema em inglês, como: 'cats', 'nature', 'music'...
                </p>
            </label>
            </form>
        </FormStyle>

        <IconsMedia>
        <a href="https://www.linkedin.com/in/vitorr-moraes/" 
        target="_blank" rel="noopener noreferrer">
        <ion-icon name="logo-linkedin"></ion-icon></a>
        <a href="https://github.com/vitorMoraes03" 
        target="_blank" rel="noopener noreferrer">
        <ion-icon name="logo-github"></ion-icon></a>
        </IconsMedia>

        {modalSearch ?
        (<><ModalSearch>
            <div>
            <p>Tente outra palavra, não temos imagens suficientes para essa.</p>
            <button onClick={() => setModalSearch(false)}>OK</button>
            </div>
            </ModalSearch>
            <OverlayStyle/></>)
        : 
        null}
        
        </>
    )
}


