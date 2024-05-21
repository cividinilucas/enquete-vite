import React from "react";
import { useState } from "react";
import { useEnquetes } from "../config/EnqueteContext";

const ListarEnquete = () => {
  const { enquetes } = useEnquetes();
  const [votos, setVotos] = useState([]);
  const [opcaoVotada, setOpcaoVotada] = useState([]);
  console.log(votos);

  const submitVoto = (index) => {
    const updateVotos = [...votos];

    if (!opcaoVotada.includes(index)) {
      updateVotos[index] = (updateVotos[index] || 0) + 1;
      setVotos(updateVotos);
      setOpcaoVotada([...opcaoVotada, index]);
    }
  };

  const BoxEnquetes = () => {
    if (enquetes.length == 0) {
      return <div>Não há enquetes</div>;
    }
    return (
      <>
        {enquetes.map((enquete, index) => (
          <div className="box-enquete" key={index}>
            <h3>{enquete.enquete}</h3>
            <ul>
              {enquete.opcoes.map((opcao, segundoIndex) => (
                <li
                  onClick={() => submitVoto(index + 1 + "" + segundoIndex)}
                  key={index + 1 + "" + segundoIndex}
                >
                  {opcao} : {votos[index + 1 + "" + segundoIndex]}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </>
    );
  };

  return (
    <section className="box-enquetes">
      <BoxEnquetes></BoxEnquetes>
    </section>
  );
};

export default ListarEnquete;
