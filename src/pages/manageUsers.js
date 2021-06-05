import '../styles/manageUsers.scss'

import TextHeader from '../components/common/TextHeader/index'
import NavBar from '../components/common/navbar/index'

export default function ManageUsersPage() {
    return (
        <div className="manage-users">
            <TextHeader text="manage users" />
            <NavBar
                navLinks={[
                    {
                        text: 'validate users',
                        href: 'manage-users/1'
                    },
                    {
                        text: 'search & update users',
                        href: 'manage-users/2'
                    },
                    {
                        text: 'additinal settings',
                        href: 'manage-users/3'
                    }
                ]}
            />
        </div>
    )
}
