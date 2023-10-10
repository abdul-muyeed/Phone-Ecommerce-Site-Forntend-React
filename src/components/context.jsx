// eslint-disable-next-line no-unused-vars
import { createContext, useContext, useReducer } from 'react'


const AppContext = createContext()

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
    // const [state, dispatch] = useReducer(reducer, initialState)
    return <AppContext.Provider value="">{children}</AppContext.Provider>
}
const useGlobalContext = () => {
    return useContext(AppContext)
}


// eslint-disable-next-line react-refresh/only-export-components
export { AppContext, AppProvider, useGlobalContext}