import TextHeader from '../../../common/TextHeader/index'
import UserRow from './UserRow'
import './style.scss'

import EmptyIcon from '../../../../asset/icons/sleep.gif'

export default function UserPatients({ users }) {
    return (
        <>
            <TextHeader text="search result" />
            <div className="user-patients">
                {users.length ? (
                    <div className="users-list">
                        {users.map((user) => (
                            <UserRow user={user} />
                        ))}
                    </div>
                ) : (
                    <img src={EmptyIcon} alt="sleep" />
                )}
            </div>
        </>
    )
}
