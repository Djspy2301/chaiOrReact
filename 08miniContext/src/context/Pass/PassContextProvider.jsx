import PassContext from "./PassContext";
import React from "react";

const passContextProvider=({children})=>{
    const [pass, setPass] = React.useState([]);
    return(
        <PassContext.Provider value={{pass, setPass}}>
            {children}
        </PassContext.Provider>
    )
}

export default passContextProvider;