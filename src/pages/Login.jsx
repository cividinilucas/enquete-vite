import React from "react";

const Login = () => {
    
        return( 
        <section>
            <form>
                <label> Usuário </label>
                <br/>
                <input type="text"/>
                <br />
                <label> Senha </label>
                <br />
                <input type="password"/>
                <br />
                <br />
                <button type="submit"> Acessar </button>
            </form>
        </section>
        )
}

export default Login;