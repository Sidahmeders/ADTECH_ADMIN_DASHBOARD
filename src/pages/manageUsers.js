import '../styles/manageUsers.scss'

import TextHeader from '../components/common/TextHeader/index'
import NavBar from '../components/common/navbar/index'

export default function ManageUsersPage() {
    return (
        <div className="manage-users">
            <TextHeader text="manage users" />
            <NavBar />
        </div>
    )
}
