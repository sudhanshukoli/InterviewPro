import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({children}) => {

    const [userData, setUserData] = useState({
        id: 0,
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