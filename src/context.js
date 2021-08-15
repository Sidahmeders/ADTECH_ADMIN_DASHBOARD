import { createContext, useState } from 'react'
import LocalStorage from './utils/localStorage'

const Context = createContext()

function ContextProvider(props) {
    const [sidebarState, setSidebarState] = useState(LocalStorage.getSidebarState())

    const toggleSidebar = () => {
        setSidebarState(() => LocalStorage.toggleSidebarState(sidebarState))
    }

    const [cephaloResult, setCephaloResult] = useState(false)

    return (
        <Context.Provider
            value={{
                sidebarState,
                toggleSidebar,
                cephaloResult,
                setCephaloResult
            }}>
            {props.children}
        </Context.Provider>
    )
}

const ContextConsumer = Context

export { ContextProvider, ContextConsumer }
