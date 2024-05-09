import React from "react";
import { useState } from "react";

const AdicionarEnquete = () => {
    
        const [enquete, setEnquete] = useState("");
        const [opcoes, setOpcoes] = useState([])

       

        const submitForm = (e) =>{
                e.preventDefault();
        }
        const addOpcao = () => {
                setOpcoes([...opcoes, ""]) 
        }



        return(
        <section>
                <form onSubmit={submitForm}>
                        <label> Nome o nome da enquete? </label>
                        <br/>
                        <input type="text" placeholder="Nome da enquete"  onChange={(e) => setEnquete(e.target.value)}/>
                        
                        {opcoes.map((option, index) => ( 
                        <div>
                                <label placeholder="Adicionar opção"> Opção </label>
                                <input type="text"/>
                        </div>
                        ))}
                        <br />
                        <button type="submit" onClick={addOpcao}> Adicionar opção </button>
                </form>
        </section>
        )
}

export default AdicionarEnquete;