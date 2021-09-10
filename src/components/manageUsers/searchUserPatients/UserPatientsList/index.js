import TextHeader from '../../../common/TextHeader/index'
import UsersList from './UsersList'
import './style.scss'

import EmptyIcon from '../../../../asset/icons/sleep.gif'

export default function UserPatients({ users, setUsers }) {
    return (
        <>
            <TextHeader text="user patients list" />
            <div className="user-patients">
                {users.length ? <UsersList users={users} /> : <img src={EmptyIcon} alt="sleep" />}
            </div>
        </>
    )
}
