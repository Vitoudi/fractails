import React, { useState } from "react";

export const GlobalContext = React.createContext(null)

const defaultState = {
    color: 'black',
    lineWidth: 1,
    mode: 'default'
}

export default function GlobalContextProvider({children}) {
    const [globalState, setGlobalState] = useState(defaultState)

    return (
        <GlobalContext.Provider value={[globalState, setGlobalState]}>
            {children}
        </GlobalContext.Provider>
    )
}
