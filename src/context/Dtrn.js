import { createContext, useState } from "react";

export const Dtrn = createContext()
export const DtrnProvider = ({ children }) => {
    const [datatransfer, setdatatransfer] = useState()
    var data
    function putdt(dt) {
        setdatatransfer(dt)
        data = dt
        // console.log(dt)
        // console.log(datatransfer)
    }
    function getdt() {
        return data
    }
    return (<Dtrn.Provider value={{ putdt, getdt }} >{children}</Dtrn.Provider>)
}