import React from "react";
import "animate.css/animate.css";

const Login = () => {
    
        return( 
        <section className="animate__animated animate__zoomIn">
            <form>
                <label> Usuário </label>
                <br/>
                <input type="text" placeholder="Usuário"/>
                <br />
                <label> Senha </label>
                <br />
                <input type="password" placeholder="Senha"/>
                <br />
                <br />
                <button type="submit" className="animate__animated animate__headShake"> Acessar </button>
            </form>
        </section>
        )
}

export default Login;