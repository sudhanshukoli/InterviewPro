import { useState } from "react";
import UserContext from "./TheUserContext";

export const UserContextProvider = ({children}) => {

    const [userData, setUserData] = useState({
        id: "",
        username: "",
        role: "",
        name: ""
    })

    return(
        <UserContext.Provider value={{ userData, setUserData }} >
            {children}
        </UserContext.Provider>
    )
};