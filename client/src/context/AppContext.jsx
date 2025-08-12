import { createContext } from "react";
import { useState } from "react";
export const Appcontext = createContext()

const AppContextProvider = (props) =>{
     const [user, setUser] = useState(0);
     const value = {
        user, setUser
     }

     return (
        <Appcontext.Provider value = {value}>
            {props.children}
        </Appcontext.Provider>
     )
}

export default AppContextProvider