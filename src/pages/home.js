import { loadApi } from "../features/loadApi";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export function Home(props){

    const [searchInput, setSearchInput] = useState([]);
    const setArrayImgs = props.setArrayImgs;
    const navigate = useNavigate();

    function handleChange(e){
        setSearchInput(e.target.value);
    }

    async function handleSubmit(e){
        e.preventDefault();
        let res = await loadApi(searchInput);
        setArrayImgs(res);
        navigate('/game');
    }   

    return (
        <div>

        <h1>TITLE</h1>
        <form className="search-bar">
            <div className="container-input">
                <input className="input" onChange={handleChange} value={searchInput} maxLength={15}></input>
                <label className="container-label">
                    <p>Escolha um tema, como carros, praia, video-game, cerveja.</p>
                    <p>Você pode errar 10 vezes!</p>
                </label>
            </div>
            <button className="btn" onClick={handleSubmit}>Search</button>
        </form>

        </div>
    )
}
