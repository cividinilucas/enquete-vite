import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const EnqueteContext = createContext();

export const useEnquetes = () => useContext(EnqueteContext) 

const EnqueteProvider = ({ children }) => {
    
    const [enquetes, setEnquetes] = useState([])

    const addEnquete = (enquete) => {
        console.log(enquete)
    }
    return(

        <EnqueteContext.Provider value={{enquetes, addEnquete}}>
            {children}
        </EnqueteContext.Provider>
    )
}

export default EnqueteProvider
