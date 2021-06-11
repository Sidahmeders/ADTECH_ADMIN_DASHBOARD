import { useEffect, useState, useRef } from 'react'
import '../../../styles/manageUsers/validateUsers.scss'
import Fetch from '../../../utils/fetchData'

import UserRow from '../UserRow'
import Spinner from '../../../asset/icons/spinner.gif'
import ButtonElement from '../../common/form/button/index'
import AlertStatus from '../../common/alert/index'

export default function ValidateUsers() {
    const _isMounted = useRef(true)

    const [unAuthorizedUsers, setUnAuthorizedUsers] = useState([])

    const fetchUnAuthorizedUsers = async () => {
        const response = await Fetch.GET('admin/users/unAuthorized', 15)
        if (_isMounted.current) {
            if (response) {
                const { data } = response
                if (data) {
                    setUnAuthorizedUsers(() => data.users)
                }
            }
        }
    }

    useEffect(() => {
        fetchUnAuthorizedUsers()
        return () => {
            _isMounted.current = false
        }
    }, [])

    const [droppedUser, setDroppedUser] = useState(false)

    const handleAccessGranted = (event) => {
        event.preventDefault()
        const body = {}
        Fetch.POSTJson('admin/users/grantAccess', body, 'PUT')
    }

    const handleDropingUser = async (userId) => {
        const response = await Fetch.Delete('admin/users/dropUser', userId)
        if (response) {
            const { data } = response
            if (data) {
                setDroppedUser(() => data)
                const users = unAuthorizedUsers.filter((user) => user._id !== data.user_id)
                setUnAuthorizedUsers(() => users)
            }
        }
    }

    return (
        <div className="validate-users">
            {unAuthorizedUsers.length ? (
                <AlertStatus
                    message={{
                        pending: `${unAuthorizedUsers.length} user are waiting to be reviewed`
                    }}
                />
            ) : droppedUser ? (
                <AlertStatus message={{ error: `${droppedUser.name} has been dropped` }} />
            ) : (
                ''
            )}
            <div className="unAuthUsers-container">
                {unAuthorizedUsers.length ? (
                    unAuthorizedUsers.map((user, index) => {
                        return (
                            <div key={index} className="card">
                                <UserRow user={user} />
                                <div className="buttons">
                                    <ButtonElement
                                        label="grant access"
                                        clickHandler={handleAccessGranted}
                                    />
                                    <ButtonElement
                                        label="drop this user"
                                        clickHandler={() => handleDropingUser(user._id)}
                                    />
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <div className="spinner">
                        <img src={Spinner} alt="spinner" />
                    </div>
                )}
            </div>
        </div>
    )
}
