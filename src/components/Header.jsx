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

const Header = () => {
  const usuario = Cookies.get("usuario");

  return (
    <header>
      <nav>
        <div>
          <Link to="/listar-enquetes">
            <FontAwesomeIcon icon={faList} /> Listar Enquetes
          </Link>
          <Link to="/sobre">
            <FontAwesomeIcon icon={faCircleInfo} /> Sobre
          </Link>
        </div>

        <div>
          {usuario == undefined ? (
            <Link to="/login">
              <FontAwesomeIcon icon={faUser} /> Login
            </Link>
          ) : (
            <>
              <Link to="/adicionar-enquete">
                <FontAwesomeIcon icon={faPlus} /> Adicionar Enquete
              </Link>
              <Link to="/login">
                <FontAwesomeIcon icon={faUser} /> {usuario}
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
