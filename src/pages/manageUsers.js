import { Switch, Route } from 'react-router-dom'
import '../styles/manageUsers/index.scss'

import TextHeader from '../components/common/TextHeader/index'
import NavBar from '../components/common/navbar/index'
import ValidateUsers from '../components/manageUsers/ValidateUsers'
import SearchUpdateUsers from '../components/manageUsers/SearchUpdateUsers/index'

export default function ManageUsersPage() {
    return (
        <>
            <div className="manage-users">
                <TextHeader text="manage users" />
                <NavBar
                    navLinks={[
                        {
                            text: 'validate users',
                            href: 'manage-users/validate-users'
                        },
                        {
                            text: 'search & update users',
                            href: 'manage-users/search-update-users'
                        },
                        {
                            text: 'additinal settings',
                            href: 'manage-users/3'
                        }
                    ]}
                />
            </div>
            <Switch>
                <Route path="/home/manage-users/validate-users" component={ValidateUsers} />
                <Route
                    path="/home/manage-users/search-update-users"
                    component={SearchUpdateUsers}
                />
            </Switch>
        </>
    )
}
