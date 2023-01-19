import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FormStyle, Title, ModalSearch } from "./style";
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
                <p>Digite um tema para montar seu Jogo da Memória. Exemplo: gatos, praia, carros...</p>
            </label>
            </form>
        </FormStyle>
        {modalSearch ?
        (<><ModalSearch>
            <div>
            <p>Tente outra palavra, ou traduza para o inglês.</p>
            <button onClick={() => setModalSearch(false)}>OK</button>
            </div>
            </ModalSearch>
            <OverlayStyle/></>)
        : 
        null}
        
        </>
    )
}


