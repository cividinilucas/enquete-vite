import React from "react";
import { useEnquetes } from "../config/EnqueteContext";

const ListarEnquete = () => {
  const { enquetes } = useEnquetes();
  console.log(enquetes);

  const BoxEnquetes = () => {
     return (
      <>
        {enquetes.map((enquete, index) => (
          <div className="box-enquete" key={index}>
            <h3>{enquete.enquete}</h3>
            <ul>
              {enquete.opcoes.map((opcao, segundoIndex) => (
                <li key={segundoIndex}>
                  {opcao}
                </li>
              ))}
            </ul> 
          </div>
        ))}
      </>
    );
  };


  return (
    <section>
      <BoxEnquetes></BoxEnquetes>
    </section>
  )
};

export default ListarEnquete;
