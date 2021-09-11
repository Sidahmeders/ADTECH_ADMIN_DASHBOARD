import Layout from './components/Layout/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { ContextConsumer } from './context'

import LoginPage from './pages/login/index'
import HomePage from './pages/home'
import DashBoard from './pages/dashboard'
import ManagePatients from './pages/managePatients'
import AddUsers from './pages/addUsers'
import Reports from './pages/reports'
import ManageUsers from './pages/manageUsers'
import AdminProfile from './pages/adminProfile'
import DentalCharts from './pages/dentalCharts'

function App() {
    // const { randomFunction } = useContext(ContextConsumer)
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Layout>
                        <Route exact path="/home" component={HomePage} />
                        <Route path="/dashboard" component={DashBoard} />
                        <Route path="/manage-patients" component={ManagePatients} />
                        <Route path="/add-users" component={AddUsers} />
                        <Route path="/reports" component={Reports} />
                        <Route path="/manage-users" component={ManageUsers} />
                        <Route path="/dental-charts" component={DentalCharts} />
                        <Route path="/admin-profile" component={AdminProfile} />
                    </Layout>
                </Switch>
            </Router>
        </>
    )
}

export default App
