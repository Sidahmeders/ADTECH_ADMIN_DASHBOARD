import { useEffect, useState, useRef } from 'react'
import '../../../styles/manageUsers/validateUsers.scss'
import Fetch from '../../../utils/fetchData'

import Spinner from '../../../asset/icons/spinner.gif'
import EmptyResult from '../../../asset/icons/notUsed/nothingFound.gif'

import UserRow from '../UserRow'
import ButtonElement from '../../common/form/button/index'
import AlertStatusBar from '../../common/alert/index'

const handlePendingSubmition = (setAlertMessage) => {
    setAlertMessage(() => {
        return {
            pending: 'please wait a moment...',
            success: '',
            error: ''
        }
    })
}

const handleFailedSubmition = (setAlertMessage, error) => {
    const errorMessage = error
        ? error.message
        : 'something unexpected happend, please check the dev console'
    setAlertMessage(() => {
        return {
            pending: '',
            success: '',
            error: errorMessage
        }
    })
}

const removeReviewedUser = (users, id, setUnAuthorizedUsers) => {
    users = users.filter((user) => user._id !== id)
    setUnAuthorizedUsers(() => users)
}

const hanldeResponseData = (data, setUnAuthorizedUsers, setEmptyResponse, setAlertMessage) => {
    const unAuthUsers = data.users
    if (unAuthUsers.length) {
        setUnAuthorizedUsers(() => unAuthUsers)
    } else {
        setEmptyResponse(() => true)
        setAlertMessage(() => {
            return {
                pending: '',
                success: 'everything seems up to date',
                error: ''
            }
        })
    }
}

export default function ValidateUsers() {
    const _isMounted = useRef(true)
    const [unAuthorizedUsers, setUnAuthorizedUsers] = useState([])
    const [emptyResponse, setEmptyResponse] = useState(false)

    const [alertMessage, setAlertMessage] = useState({
        pending: '',
        success: '',
        error: ''
    })

    const fetchUnAuthorizedUsers = async () => {
        handlePendingSubmition(setAlertMessage)
        const response = await Fetch.GET('admin/users/unAuthorized', 15)

        if (_isMounted.current) {
            if (response) {
                const { data, error } = response
                if (data) {
                    hanldeResponseData(
                        data,
                        setUnAuthorizedUsers,
                        setEmptyResponse,
                        setAlertMessage
                    )
                } else if (error) {
                    handleFailedSubmition(setAlertMessage, error)
                }
            } else {
                handleFailedSubmition(setAlertMessage)
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
    const [authorizedUser, setAuthorizedUser] = useState(false)

    const handleAccessGranted = async (user) => {
        const body = { id: user._id, grade: user.grade }
        const response = await Fetch.POSTJson('admin/users/grantAccess', body, 'PUT')
        if (response) {
            const { data } = response
            if (data) {
                setAuthorizedUser(() => data)
                removeReviewedUser(unAuthorizedUsers, data.user_id, setUnAuthorizedUsers)
            }
        }
    }

    const handleDropingUser = async (userId) => {
        const response = await Fetch.Delete('admin/users/dropUser', userId)
        if (response) {
            const { data } = response
            if (data) {
                setDroppedUser(() => data)
                removeReviewedUser(unAuthorizedUsers, data.user_id, setUnAuthorizedUsers)
            }
        }
    }

    return (
        <div className="validate-users">
            {unAuthorizedUsers.length ? (
                <AlertStatusBar
                    message={{
                        pending: `${unAuthorizedUsers.length} user are waiting to be reviewed`
                    }}
                />
            ) : alertMessage.pending ? (
                <AlertStatusBar message={alertMessage} />
            ) : alertMessage.error ? (
                <AlertStatusBar message={alertMessage} />
            ) : alertMessage.success ? (
                <AlertStatusBar message={alertMessage} />
            ) : (
                ''
            )}
            {authorizedUser ? (
                <AlertStatusBar
                    message={{ success: `${authorizedUser.name} has been authorized` }}
                />
            ) : (
                ''
            )}
            {droppedUser ? (
                <AlertStatusBar message={{ error: `${droppedUser.name} has been dropped` }} />
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
                                        clickHandler={() => handleAccessGranted(user)}
                                    />
                                    <ButtonElement
                                        label="drop this user"
                                        clickHandler={() => handleDropingUser(user._id)}
                                    />
                                </div>
                            </div>
                        )
                    })
                ) : emptyResponse ? (
                    <div className="empty-result">
                        <img src={EmptyResult} alt="empty-result" />
                    </div>
                ) : (
                    <div className="spinner">
                        <img src={Spinner} alt="spinner" />
                    </div>
                )}
            </div>
        </div>
    )
}
