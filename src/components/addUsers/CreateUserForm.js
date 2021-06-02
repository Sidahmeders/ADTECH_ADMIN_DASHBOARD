import { useState } from 'react'
import Fetch from '../../utils/fetchData'
import '../../styles/addUsers/createUsersForm.scss'

import TextInputElement from '../common/form/TextInputElement/index'
import FileInputElement from '../common/form/FileInputElement/index'
import DateInputElement from '../common/form/DateInputElement/index'
import RadioInputElement from '../common/form/RadioInputElement/index'
import ButtonElement from '../common/form/button/index'
import AlertStatusBar from '../common/alert/index'

const initialUserInfo = {
    first_name: '',
    last_name: '',
    birth_date: '',
    phone_number: '',
    gender: '',
    faculty: '',
    country: '',
    profile_image: '',
    identity_card: '',
    year_of_study: '',
    grade: '',
    specialty: '',
    email: '',
    password: ''
}

const handleSuccessfulSubmition = (setAlertMessage, setUserInfo) => {
    setAlertMessage(() => {
        return {
            error: '',
            success: 'new user has beed added successfully..'
        }
    })
    setUserInfo(() => {
        return { ...initialUserInfo }
    })
    setTimeout(() => {
        setAlertMessage(() => {
            return {
                success: '',
                error: ''
            }
        })
    }, 3000)
}

const handleFailedSubmition = (setAlertMessage, error) => {
    const errorMessage = error
        ? error.message
        : 'something unexpected happend, please check the dev console'
    setAlertMessage(() => {
        return {
            success: '',
            error: errorMessage
        }
    })
}

const createFormData = (userInfo) => {
    const formData = new FormData()
    for (let file in userInfo) {
        formData.append(file, userInfo[file])
    }
    return formData
}

export default function CreateUserForm({ alertMessage, setAlertMessage }) {
    const [userInfo, setUserInfo] = useState({ ...initialUserInfo })

    const hadnleUserInfoChange = (event) => {
        const files = event.target.files
        const entry = event.target.name

        if (files) {
            const file = files[0]
            setUserInfo(() => {
                return {
                    ...userInfo,
                    [entry]: file
                }
            })
        } else {
            const value = event.target.value
            setUserInfo(() => {
                return {
                    ...userInfo,
                    [entry]: value
                }
            })
        }
    }

    const submitNewUser = async (event) => {
        event.preventDefault()

        const formData = createFormData(userInfo)
        const response = await Fetch.POSTMultiForm('admin/users', formData)

        if (response) {
            const { data, error } = response
            if (data) {
                handleSuccessfulSubmition(setAlertMessage, setUserInfo)
            } else if (error) {
                handleFailedSubmition(setAlertMessage, error)
            }
        } else {
            handleFailedSubmition(setAlertMessage)
        }
    }

    return (
        <div className="create-users-form">
            <h1>create new users</h1>
            <form id="form-x">
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
                    label="year_of_study"
                    options={['1-st', '2-nd', '3-rd', '4-th', '5-th', '6-th']}
                    changeHandler={hadnleUserInfoChange}
                />
                <div className="row files">
                    <FileInputElement label="profile_image" changeHandler={hadnleUserInfoChange} />
                    <FileInputElement label="identity_card" changeHandler={hadnleUserInfoChange} />
                </div>
                <RadioInputElement
                    label="specialty"
                    options={['OFD', 'OCE', 'PARO', 'PROTHESE', 'PCB']}
                    changeHandler={hadnleUserInfoChange}
                />
                <RadioInputElement
                    label="grade"
                    options={[
                        'student',
                        'resident',
                        'assistant',
                        'professor',
                        'genarlist',
                        'specialist'
                    ]}
                    changeHandler={hadnleUserInfoChange}
                />
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
                    value={userInfo.password}
                    changeHandler={hadnleUserInfoChange}
                />
                <div className="alert">
                    <AlertStatusBar message={alertMessage} />
                </div>
                <ButtonElement clickHandler={submitNewUser} label="submit user" />
            </form>
        </div>
    )
}
