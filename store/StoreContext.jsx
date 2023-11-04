import { createContext, useState } from "react";

export const StoreContext = createContext(null);

const Store = ({ children }) => {

    const [selected, setSelected] = useState([])
    const [totalPages, setTotalPages] = useState(0)

    return <StoreContext.Provider
        value={{
            selected, setSelected,
            totalPages, setTotalPages,
        }}
    >
        {children}
    </StoreContext.Provider>
}

export default Store