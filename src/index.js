import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ContextProvider } from './context'

ReactDOM.render(
    <StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </StrictMode>,
    document.getElementById('root')
)

serviceWorker.register()
