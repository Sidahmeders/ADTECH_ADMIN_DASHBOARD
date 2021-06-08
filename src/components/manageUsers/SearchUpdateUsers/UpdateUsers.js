import '../../../styles/manageUsers/searchUpdateUsers.scss'

import TextHeader from '../../common/TextHeader/index'
import UserRow from '../UserRow'

export default function UpdateUsers({ users }) {
    console.log(users)

    return (
        <div className="update-users">
            <TextHeader text="search result" />
            {users.length ? (
                users.map((user, index) => {
                    return <UserRow key={index} user={user} imageClickHandler={() => {}} />
                })
            ) : (
                <div className="empty-search">nothing is found yet...</div>
            )}
        </div>
    )
}
