import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Rotas from "./config/routes";

function App() {
    return (
        <>
            <Header/>
            <main>
                <Rotas></Rotas>
            </main>
            <Footer/>
        </>
    )
}

export default App;