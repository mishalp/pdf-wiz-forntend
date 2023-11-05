import { createContext, useState } from "react";

export const StoreContext = createContext(null);

const Store = ({ children }) => {

    const [selected, setSelected] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [user, setUser] = useState(null)

    return <StoreContext.Provider
        value={{
            selected, setSelected,
            totalPages, setTotalPages,
            user, setUser
        }}
    >
        {children}
    </StoreContext.Provider>
}

export default Store