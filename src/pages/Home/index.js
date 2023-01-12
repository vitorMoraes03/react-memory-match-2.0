import { loadApi } from "../../features/loadApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "./style";
import { Title } from "../../styles";
import { useRef } from "react";
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
        <div>
        <Title/>
        <Form>
            <div>
                <input onChange={handleChange} value={searchInput} maxLength={15} ref={inputRef}></input>
                <label>
                    <p>Escolha um tema, como carros, praia, video-game, cerveja.</p>
                    <p>Você pode errar 10 vezes!</p>
                </label>
            </div>
            <button onClick={handleSubmit}>Search</button>
        </Form>
        </div>
    )
}
