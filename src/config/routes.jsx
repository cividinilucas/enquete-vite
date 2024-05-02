import React from "react";
import { Route, Routes } from "react-router-dom";

import ListarEnquete from "../pages/ListarEnquete";
import Sobre from "../pages/Sobre";
import Login from "../pages/Login";
import AdicionarEnquete from "../pages/AdicionarEnquete";

function Rotas(){
    return(
        <Routes>
            <Route path="/listar-enquetes" element={<ListarEnquete/>}></Route>
            <Route path="/sobre" element={<Sobre></Sobre>}></Route>
            <Route path="/adicionar-enquete" element={<AdicionarEnquete/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
    )
}

export default Rotas;