import React from "react";
import { useEnquetes } from "../config/EnqueteContext";

const ListarEnquete = () => {
  const { enquetes } = useEnquetes();

  console.log(enquetes);

  return (
    <>
      {
      enquetes.map((enquete, index) => console.log(enquete))}
      
  
      <section>
        Lista enquetes
      </section>
    </>
  );
};

export default ListarEnquete;
