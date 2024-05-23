import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faPlus,
  faUser,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import { useState } from "react";

const Header = () => {
  const usuario = Cookies.get("usuario");
  const[menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto)
  }

  return (
    <header>
      <nav className={menuAberto ? "menu-aberto" : ""}>
        <div>
          <Link to="/listar-enquetes" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faList} /> Listar Enquetes
          </Link>
          <Link to="/sobre" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faCircleInfo} /> Sobre
          </Link>
        </div>

        <div>
          {usuario == undefined ? (
            <Link to="/login" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faUser} /> Login
            </Link>
          ) : (
            <>
              <Link to="/adicionar-enquete" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faPlus} /> Adicionar Enquete
              </Link>
              <Link to="/login" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faUser} /> {usuario}
              </Link>
            </>
          )}
        </div>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}> &#9776; </div>
    </header>
  );
};

export default Header;
