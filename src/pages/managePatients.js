import { Switch, Route } from 'react-router-dom'

import TextHeader from '../components/common/TextHeader/index'
import TopNavbar from '../components/common/topNavbar/index'
import ValidateUsers from '../components/manageUsers/ValidateUsers/index'
import SearchUpdateUsers from '../components/manageUsers/SearchUpdateUsers/index'

function ManagePatients() {
    return (
        <>
            <TextHeader text="manage patients" />
            <div style={{ margin: '0 2vw' }}>
                <TopNavbar
                    navLinks={[
                        {
                            text: 'validate patient records',
                            href: '/manage-patients/validate-patient-records'
                        },
                        {
                            text: 'search & update patients',
                            href: '/manage-patients/search-update-patients'
                        }
                    ]}
                />
            </div>
            <Switch>
                <Route path="/manage-users/validate-users" component={ValidateUsers} />
                <Route path="/manage-users/search-update-users" component={SearchUpdateUsers} />
            </Switch>
        </>
    )
}

export default ManagePatients
