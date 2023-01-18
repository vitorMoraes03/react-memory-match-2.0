import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Title } from "./style";
import { allFunctions } from "../../features/allFunctions";

export function Home(props){
    const [searchInput, setSearchInput] = useState([]);
    const { duplicateArr, isSmallScreen, loadApi } = allFunctions;
    const setArrayImgs = props.setArrayImgs;
    const navigate = useNavigate();
    const inputFocusRef = useRef(null);

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
            alert('Essa palavra tem poucas imagens, tente outra! Você também pode tentar traduzir para o inglês.');
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
        <Form>
            <div>
                <input onChange={handleChange} value={searchInput} maxLength={15} ref={inputFocusRef}></input>
                <ion-icon 
                name="search" 
                onClick={handleSubmit} 
                ></ion-icon>
            </div>
            <label>
                <p>Digite um tema para montar seu Jogo da Memória. Exemplo: gatos, praia, carros.</p>
            </label>
        </Form>
        </>
    )
}
