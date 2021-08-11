import { createContext, useState } from 'react'
import LocalStorage from './utils/localStorage'

const Context = createContext()

function ContextProvider(props) {
    const [sidebarState, setSidebarState] = useState(LocalStorage.getSidebarState())

    const toggleSidebar = () => {
        console.log(sidebarState)
        setSidebarState(() => LocalStorage.toggleSidebarState(sidebarState))
    }

    return (
        <Context.Provider
            value={{
                sidebarState,
                toggleSidebar
            }}>
            {props.children}
        </Context.Provider>
    )
}

const ContextConsumer = Context

export { ContextProvider, ContextConsumer }
