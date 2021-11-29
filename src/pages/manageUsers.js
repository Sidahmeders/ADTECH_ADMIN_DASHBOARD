import { Switch, Route } from 'react-router-dom'

import TextHeader from '../components/common/TextHeader'
import TopNavbar from '../components/common/topNavbar'
import ValidateUsers from '../components/manageUsers/ValidateUsers'
import SearchUpdateUsers from '../components/manageUsers/SearchUpdateUsers'
import SearchUserPatients from '../components/manageUsers/SearchUserPatients'

export default function ManageUsersPage() {
    return (
        <>
            <TextHeader text="manage users" />
            <div style={{ margin: '0 2vw' }}>
                <TopNavbar
                    navLinks={[
                        {
                            text: 'validate users',
                            href: '/manage-users/validate-users'
                        },
                        {
                            text: 'search & update users',
                            href: '/manage-users/search-update-users'
                        },
                        {
                            text: 'search user patients',
                            href: '/manage-users/Search-user-patients'
                        }
                    ]}
                />
            </div>
            <Switch>
                <Route path="/manage-users/validate-users" component={ValidateUsers} />
                <Route path="/manage-users/search-update-users" component={SearchUpdateUsers} />
                <Route path="/manage-users/search-user-patients" component={SearchUserPatients} />
            </Switch>
        </>
    )
}
