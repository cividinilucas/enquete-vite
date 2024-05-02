import React from "react";
import { Route, Routes } from "react-router-dom";

function Rotas(){
    return(
        <Routes>
            <Route path="/listar-enquetes"></Route>
            <Route path="/sobre"></Route>
            <Route path="/adicionar-enquete"></Route>
            <Route path="/login"></Route>
        </Routes>
    )
}

export default Rotas;