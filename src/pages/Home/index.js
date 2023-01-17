import { loadApi } from "../../features/loadApi";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Title } from "./style";
import { duplicateArr } from "../../features/duplicateArr";

export function Home(props){
    const [searchInput, setSearchInput] = useState([]);
    const setArrayImgs = props.setArrayImgs;
    const navigate = useNavigate();
    const inputRef = useRef(null);

    function handleChange(e){
        setSearchInput(e.target.value);
    }

    async function handleSubmit(e){
        e.preventDefault();
        if(!searchInput){inputRef.current.focus();
            return}

        let res = await loadApi(searchInput);
        if(res.length < 8){
            alert('Essa palavra tem poucas imagens, tente outra! Você também pode tentar traduzir para o inglês.');
            setSearchInput('');
            inputRef.current.focus();
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
                <input onChange={handleChange} value={searchInput} maxLength={15} ref={inputRef}></input>
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
