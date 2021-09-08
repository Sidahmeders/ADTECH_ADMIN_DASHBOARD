import './style.scss'
import { useEffect, useState, useContext } from 'react'
import Fetch from '../../../../utils/fetchData'
import { ContextConsumer } from '../../../../context'

import TextHeader from '../../../common/TextHeader/index'
import UserCard from './UserCard'
import UpdateForm from './UpdateForm'
import NoFile from '../../../../asset/icons/EmptyFolder.png'
// import ButtonElement from '../../../common/form/button/index'

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

    const updateUserInfo = async (userId) => {
        const response = await Fetch.POSTJson('admin/users', { id: userId }, 'PUT')

        if (response) {
            const { data } = response
            if (data) {
                setUserInfo(() => data.user)
            }
        }
    }

    const cancelUpdate = () => {
        setUserInfo(() => false)
    }

    const submitUpdate = async () => {
        userInfo.id = userInfo._id
        handlePendingUpdate(setAlertMessage)
        const response = await Fetch.POSTJson('admin/users', userInfo, 'PUT')

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

    useEffect(() => {
        checkSelectedRadioElement(userInfo)
        insertDateInput(userInfo)
    }, [userInfo])

    return (
        <>
            <TextHeader text="search result" />
            <div className="update-users">
                {userInfo ? (
                    <div
                        style={{ left: sidebarState ? '60px' : '220px' }}
                        className="selected-user-container">
                        <UpdateForm
                            userInfo={userInfo}
                            hadnleUserInfoChange={hadnleUserInfoChange}
                            alertMessage={alertMessage}
                            submitUpdate={submitUpdate}
                            cancelUpdate={cancelUpdate}
                        />
                    </div>
                ) : users.length ? (
                    users.map((user, index) => {
                        return (
                            <div key={index} className={`card ${user.role}`}>
                                <UserCard user={user} />
                                {/* <ButtonElement
                                    label="update user info"
                                    clickHandler={() => updateUserInfo(user._id)}
                                /> */}
                            </div>
                        )
                    })
                ) : (
                    <div className="empty-search">
                        <img src={NoFile} alt="notfound" />
                    </div>
                )}
            </div>
        </>
    )
}
