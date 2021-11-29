import './style.scss'
import { useEffect, useState, useContext } from 'react'
import Fetch from '../../../../utils/fetchData'
import { ContextConsumer } from '../../../../context'

import TextHeader from '../../../common/TextHeader/index'
import AlertStatusBar from '../../../common/alert/index'
import UserCard from './UserCard'
import UpdateForm from './UpdateForm'

import NoFileIcon from '../../../../asset/icons/scan.gif'

const handlePendingUpdate = (setAlertMessage) => {
    setAlertMessage(() => {
        return {
            pending: 'please wait a moment...',
            success: '',
            error: ''
        }
    })
}

const handleSuccessfulUpdate = (setUserInfo, setAlertMessage, data) => {
    setUserInfo(() => data.user)
    setAlertMessage(() => {
        return {
            pending: '',
            success: 'user has been succefuly updated..',
            error: ''
        }
    })
    setTimeout(() => {
        setUserInfo(() => false)
        setAlertMessage(() => {
            return {
                pending: '',
                success: '',
                error: ''
            }
        })
    }, 2000)
}

const handleFailedUpdate = (setAlertMessage, error) => {
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

const checkSelectedRadioElement = (userInfo) => {
    document.querySelectorAll('.options').forEach((item) => {
        const options = item.children

        for (let option of options) {
            option = option.children[0]
            const optionValue = option.value
            const optionName = option.name
            const userInfoSelectedValue = userInfo[optionName]

            if (optionValue === userInfoSelectedValue) {
                option.checked = true
            }
        }
    })
}

const insertDateInput = (userInfo) => {
    const date = userInfo.birth_date ? userInfo.birth_date.split('T')[0] : ''
    const dateElement = document.getElementsByClassName('date-input-element')[0]
    if (dateElement) {
        const dateInput = dateElement.children[1]
        dateInput.value = date
    }
}

export default function UpdateUsers({ users, setUsers }) {
    const { sidebarState } = useContext(ContextConsumer)
    const [userInfo, setUserInfo] = useState(false)
    const [deletedUser, setDeletedUser] = useState(false)

    const [alertMessage, setAlertMessage] = useState({
        pending: '',
        success: '',
        error: ''
    })

    const hadnleUserInfoChange = (event) => {
        const entry = event.target.name
        const value = event.target.value
        setUserInfo(() => {
            return {
                ...userInfo,
                [entry]: value
            }
        })
    }

    const setUserToUpdate = async (userId) => {
        for (let user of users) {
            if (user._id === userId) {
                setUserInfo(() => user)
                break
            }
        }
    }

    const cancelUpdate = () => {
        setUserInfo(() => false)
    }

    const submitUpdate = async () => {
        userInfo.id = userInfo._id
        delete userInfo.profile_image

        handlePendingUpdate(setAlertMessage)
        const response = await Fetch.POSTJson('admin/users', userInfo, 'PUT', localStorage.Token)

        if (response) {
            const { data, error } = response
            if (data) {
                handleSuccessfulUpdate(setUserInfo, setAlertMessage, data)
                setUsers(() => [])
            } else if (error) {
                handleFailedUpdate(setAlertMessage, error)
            } else {
                handleFailedUpdate(setAlertMessage)
            }
        }
    }

    const removeDeletedUser = (users, id, setUsers) => {
        users = users.filter((user) => user._id !== id)
        setUsers(() => users)
    }

    const deleteUserPermanently = async (userId) => {
        const response = await Fetch.Delete('admin/users/dropUser', userId, localStorage.Token)
        if (response) {
            const { data } = response
            if (data) {
                setDeletedUser(() => data)
                removeDeletedUser(users, data.user_id, setUsers)
            }
        }
    }

    useEffect(() => {
        checkSelectedRadioElement(userInfo)
        insertDateInput(userInfo)
    }, [userInfo])

    return (
        <>
            <TextHeader text="search result" />
            {deletedUser ? (
                <div style={{ margin: '0 2vw 3vh 2vw' }}>
                    <AlertStatusBar
                        message={{
                            error: `${deletedUser.name} has been deleted, you can't undo this operation now`
                        }}
                    />
                </div>
            ) : (
                ''
            )}
            <div className="update-users">
                {userInfo ? (
                    <UpdateForm
                        sidebarState={sidebarState}
                        userInfo={userInfo}
                        hadnleUserInfoChange={hadnleUserInfoChange}
                        alertMessage={alertMessage}
                        submitUpdate={submitUpdate}
                        cancelUpdate={cancelUpdate}
                    />
                ) : users.length ? (
                    users.map((user, index) => {
                        return (
                            <UserCard
                                key={index}
                                user={user}
                                setUserToUpdate={setUserToUpdate}
                                deleteUserPermanently={deleteUserPermanently}
                            />
                        )
                    })
                ) : (
                    <div className="empty-search">
                        <img src={NoFileIcon} alt="notfound" />
                    </div>
                )}
            </div>
        </>
    )
}
