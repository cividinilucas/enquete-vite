import React from "react";
import 'animate.css';

const AdicionarEnquete = () => {
    
        return(
        <section>
                <label animate__rubberBand> Nome da Enquete </label>
                <br/>
                <input type="text"/>
                <br/>
                <label> Descrição da Enquete</label>
                <input type="text"/>
                <br/>
        </section>
        )
}

export default AdicionarEnquete;