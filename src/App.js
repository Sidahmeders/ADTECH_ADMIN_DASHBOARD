import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { ContextConsumer } from './context'

import Login from './pages/login'
import Home from './pages/home'

function App() {
    // const context = useContext(ContextConsumer)
    // const { randomFunction } = context

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/home" component={Home} />
            </Switch>
        </Router>
    )
}

export default App
