import { createContext } from 'react'

const Context = createContext()

function ContextProvider(props) {
    const randomFunction = () => console.log('random context function')

    return (
        <Context.Provider
            value={{
                randomFunction
            }}>
            {props.children}
        </Context.Provider>
    )
}

const ContextConsumer = Context

export { ContextProvider, ContextConsumer }
