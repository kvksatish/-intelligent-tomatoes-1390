import { createContext, useState } from "react";

export const DtrnContext = createContext();
export const DtrnProvider = ({ children }) => {
    const [datatr, setdatatransfer] = useState([])
    const [rbdata, setrbdata] = useState([])


    function putdt(dt) {
        setdatatransfer([
            dt])
    }
    function putrbdata(dat) {
        setrbdata(
            dat
        )
    }


    return (<DtrnContext.Provider value={{ putdt, datatr, rbdata, putrbdata }} >{children}</DtrnContext.Provider>)
}