import { createContext } from "react";

export const userContext = createContext({});

export const UserProvider = ({ children }) => {
    return (
        <userContext.Provider value={{}}>
            {children}
        </userContext.Provider>
    )
}