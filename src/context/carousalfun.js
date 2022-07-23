import { createContext } from "react";

export const ColCon = createContext()
export const ColConProvider = ({ children }) => {
    function ()
    return (<ColCon.Provider value={ } >{children}</ColCon.Provider>)
}