import './style.scss'
import { useEffect, useState, useContext } from 'react'
import Fetch from '../../../../utils/fetchData'
import { ContextConsumer } from '../../../../context'

import TextHeader from '../../../common/TextHeader/index'
import UserRow from '../../UserRow'
import NoFile from '../../../../asset/icons/EmptyFolder.png'

import TextInputElement from '../../../common/form/TextInputElement/index'
import DateInputElement from '../../../common/form/DateInputElement/index'
import RadioInputElement from '../../../common/form/RadioInputElement/index'
import ButtonElement from '../../../common/form/button/index'
import AlertStatusBar from '../../../common/alert/index'

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
        <div className="update-users">
            <TextHeader text="search result" />
            {userInfo ? (
                <div
                    style={{ left: sidebarState ? '60px' : '220px' }}
                    className="selected-user-container">
                    <TextHeader text="user info to update" />
                    <div className="form-container">
                        <div className="row text">
                            <TextInputElement
                                label="first_name"
                                value={userInfo.first_name}
                                changeHandler={hadnleUserInfoChange}
                            />
                            <TextInputElement
                                label="last_name"
                                value={userInfo.last_name}
                                changeHandler={hadnleUserInfoChange}
                            />
                        </div>
                        <div className="row text">
                            <DateInputElement
                                label="birth_date"
                                value={userInfo.birth_date}
                                changeHandler={hadnleUserInfoChange}
                            />
                            <TextInputElement
                                label="phone_number"
                                value={userInfo.phone_number}
                                changeHandler={hadnleUserInfoChange}
                            />
                        </div>
                        <RadioInputElement
                            label="gender"
                            options={['male', 'female']}
                            changeHandler={hadnleUserInfoChange}
                        />
                        <div className="row text">
                            <TextInputElement
                                label="faculty"
                                value={userInfo.faculty}
                                changeHandler={hadnleUserInfoChange}
                            />
                            <TextInputElement
                                label="country"
                                value={userInfo.country}
                                changeHandler={hadnleUserInfoChange}
                            />
                        </div>
                        <RadioInputElement
                            label="grade"
                            options={[
                                'student',
                                'resident',
                                'assistant',
                                'master_assistant',
                                'professor'
                            ]}
                            changeHandler={hadnleUserInfoChange}
                        />
                        {userInfo.grade === 'student' ? (
                            <RadioInputElement
                                label="year_of_study"
                                options={['1-st', '2-nd', '3-rd', '4-th', '5-th', '6-th']}
                                changeHandler={hadnleUserInfoChange}
                            />
                        ) : userInfo.grade === 'resident' ? (
                            <RadioInputElement
                                label="year_of_study"
                                options={['1-st', '2-nd', '3-rd', '4-th']}
                                changeHandler={hadnleUserInfoChange}
                            />
                        ) : (
                            ''
                        )}
                        {userInfo.grade !== 'student' ? (
                            <RadioInputElement
                                label="specialty"
                                options={['ODF', 'OCE', 'PARO', 'PROTHESE', 'PCB']}
                                changeHandler={hadnleUserInfoChange}
                            />
                        ) : (
                            ''
                        )}
                        <RadioInputElement
                            label="role"
                            options={['_unAuthorized', '_student', '_assistant', '_professor']}
                            changeHandler={hadnleUserInfoChange}
                        />
                        <TextInputElement
                            label="email"
                            type="email"
                            value={userInfo.email}
                            changeHandler={hadnleUserInfoChange}
                        />
                        <TextInputElement
                            label="password"
                            type="password"
                            value={userInfo.password || ''}
                            changeHandler={hadnleUserInfoChange}
                        />
                        <AlertStatusBar message={alertMessage} />
                        <div className="row buttons">
                            <ButtonElement clickHandler={submitUpdate} label="submit the update" />
                            <ButtonElement clickHandler={cancelUpdate} label="cancel the update" />
                        </div>
                    </div>
                </div>
            ) : users.length ? (
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
