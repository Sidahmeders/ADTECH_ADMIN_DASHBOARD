import { useState } from 'react'
import Fetch from '../../utils/fetchData'
import '../../styles/addUsers/createUsersForm.scss'

import TextInputElement from '../common/form/TextInputElement/index'
import FileInputElement from '../common/form/FileInputElement/index'
import DateInputElement from '../common/form/DateInputElement/index'
import RadioInputElement from '../common/form/RadioInputElement/index'
import ButtonElement from '../common/form/button/index'

export default function CreateUserForm() {
    const [userInfo, setUserInfo] = useState({
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
    })

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
        console.log(userInfo)

        const body = new FormData()
        for (let file in userInfo) {
            body.append(file, userInfo[file])
        }

        const response = await Fetch.POSTMultiForm('admin/users', body)

        console.log(response)
    }

    console.log(userInfo)

    return (
        <div className="create-users-form">
            <h1>create new users</h1>
            <form>
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
                <div className="row files">
                    <FileInputElement label="profile_image" changeHandler={hadnleUserInfoChange} />
                    <FileInputElement label="identity_card" changeHandler={hadnleUserInfoChange} />
                </div>
                <RadioInputElement
                    label="year_of_study"
                    options={['1-st', '2-nd', '3-rd', '4-th', '5-th', '6-th']}
                    changeHandler={hadnleUserInfoChange}
                />
                <RadioInputElement
                    label="specialty"
                    options={['OFD', 'OCE', 'PARO', 'PROTHESE', 'PCB']}
                    changeHandler={hadnleUserInfoChange}
                />
                <RadioInputElement
                    label="grade"
                    options={['student', 'chakam', 'assistant', 'professor', 'haja-kbira']}
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
                <ButtonElement clickHandler={submitNewUser} label="submit user" />
            </form>
        </div>
    )
}
