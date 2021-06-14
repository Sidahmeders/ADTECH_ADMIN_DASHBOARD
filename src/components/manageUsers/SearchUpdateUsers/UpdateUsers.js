import Fetch from '../../../utils/fetchData'
import '../../../styles/manageUsers/searchUpdateUsers.scss'

import TextHeader from '../../common/TextHeader/index'
import UserRow from '../UserRow'
import NoFile from '../../../asset/icons/noFile.gif'
import ButtonElement from '../../common/form/button/index'
import { useState } from 'react'

export default function UpdateUsers({ users }) {
    const [userInfo, setUserInfo] = useState([])

    const updateUserInfo = async (userId) => {
        const response = await Fetch.POSTJson('admin/users', { id: userId }, 'PUT')
        if (response) {
            const { data } = response
            if (data) {
                setUserInfo(() => data)
            }
        }
    }

    console.log(userInfo)

    return (
        <div className="update-users">
            <TextHeader text="search result" />
            {users.length ? (
                users.map((user, index) => {
                    return (
                        <div key={index} className="card">
                            <UserRow user={user} />
                            <ButtonElement
                                label="update user info"
                                clickHandler={() => updateUserInfo(user._id)}
                            />
                        </div>
                    )
                })
            ) : (
                <div className="empty-search">
                    <img src={NoFile} alt="notfound" />
                </div>
            )}
        </div>
    )
}
