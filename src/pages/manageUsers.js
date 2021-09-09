import { Switch, Route } from 'react-router-dom'
import '../styles/manageUsers.scss'

import TextHeader from '../components/common/TextHeader/index'
import TopNavbar from '../components/common/topNavbar/index'
import ValidateUsers from '../components/manageUsers/ValidateUsers/index'
import SearchUpdateUsers from '../components/manageUsers/SearchUpdateUsers/index'
import SearchUserPatients from '../components/manageUsers/SearchUserPatients/index'

export default function ManageUsersPage() {
    return (
        <>
            <TextHeader text="manage users" />
            <div className="manage-users">
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
