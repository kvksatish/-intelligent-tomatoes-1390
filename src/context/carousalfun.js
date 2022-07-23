import { createContext } from "react";

export const ColCon = createContext()
export const ColConProvider = ({ children }) => {

    return (<ColCon.Provider>{children}</ColCon.Provider>)
}