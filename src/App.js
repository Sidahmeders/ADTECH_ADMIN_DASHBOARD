import Layout from './components/Layout/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { ContextConsumer } from './context'

import LoginPage from './pages/login/index'
import HomePage from './pages/home'
import DashBoard from './pages/dashboard'
import UsersList from './pages/usersList'
import AddUsers from './pages/addUsers'
import ManagePatients from './pages/managePatients'
import ManageUsers from './pages/manageUsers'
import AdminProfile from './pages/adminProfile'

function App() {
    // const context = useContext(ContextConsumer)
    // const { randomFunction } = context

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Layout>
                        <Route exact path="/home" component={HomePage} />
                        <Route path="/home/dashboard" component={DashBoard} />
                        <Route path="/home/users-list" component={UsersList} />
                        <Route path="/home/add-users" component={AddUsers} />
                        <Route path="/home/manage-patients" component={ManagePatients} />
                        <Route path="/home/manage-users" component={ManageUsers} />
                        <Route path="/home/admin-profile" component={AdminProfile} />
                    </Layout>
                </Switch>
            </Router>
        </>
    )
}

export default App
