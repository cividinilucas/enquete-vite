import React from "react";
import "animate.css/animate.css";
import { useState } from "react";
import Cookies from "js-cookie";

const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [login, setLogin] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    if (usuario == "Lucas" && senha == "123") {
      setLogin(true);
      alert("Login efetuado");
      Cookies.set("usuario", usuario, { expires: 7 });
    }
    if (usuario != "Lucas") {
      alert("Usuário incorreto");
    } else if (senha != "123") {
      alert("Senha incorreta");
    }
  };

  return (
    <section>
      <form onSubmit={submitForm}>
        <label> Usuário </label>
        <br />
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          placeholder="Usuário"
        ></input>
        <br />
        <label> Senha </label>
        <br />
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha"
        ></input>
        <br />
        <br />
        <button type="submit" className="animate__animated animate__headShake">
          {" "}
          Acessar{" "}
        </button>
      </form>
    </section>
  );
};

export default Login;
