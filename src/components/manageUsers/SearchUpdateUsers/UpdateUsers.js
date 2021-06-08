import '../../../styles/manageUsers/searchUpdateUsers.scss'

import TextHeader from '../../common/TextHeader/index'
import UserRow from '../UserRow'
import NoFile from '../../../asset/icons/noFile.gif'

export default function UpdateUsers({ users }) {
    return (
        <div className="update-users">
            <TextHeader text="search result" />
            {users.length ? (
                users.map((user, index) => {
                    return <UserRow key={index} user={user} imageClickHandler={() => {}} />
                })
            ) : (
                <div className="empty-search">
                    <img src={NoFile} alt="notfound" />
                </div>
            )}
        </div>
    )
}
