import React from "react";
import { Route, Routes } from "react-router-dom";

import EnqueteProvider from "./EnqueteContext";
import ListarEnquete from "../pages/ListarEnquete";
import Sobre from "../pages/Sobre";
import Login from "../pages/Login";
import AdicionarEnquete from "../pages/AdicionarEnquete";

function Rotas() {
  return (
    <EnqueteProvider>
      <Routes>
        <Route path="/listar-enquetes" element={<ListarEnquete />}></Route>
        <Route path="/sobre" element={<Sobre></Sobre>}></Route>
        <Route path="/adicionar-enquete" element={<AdicionarEnquete />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </EnqueteProvider>
  );
}

export default Rotas;
