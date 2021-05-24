import React from 'react'
import Layout from './components/Layout/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { ContextConsumer } from './context'

import Login from './pages/login'
import Home from './pages/home'
import UsersList from './pages/usersList'

function App() {
    // const context = useContext(ContextConsumer)
    // const { randomFunction } = context

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Layout>
                        <Route exact path="/home" component={Home} />
                        <Route path="/home/users-list" component={UsersList} />
                    </Layout>
                </Switch>
            </Router>
        </>
    )
}

export default App
