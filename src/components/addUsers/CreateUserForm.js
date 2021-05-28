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
        const response = await Fetch.POST('admin/users', userInfo, {
            'Content-Type': 'application/json'
        })

        console.log(response)
    }

    console.log(userInfo.profile_image, userInfo.identity_card)

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
                    options={['male', 'female', 'gay', 'lasbian', 'transgander', 'bisexual']}
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
                    label="specialty"
                    options={['OFD', 'OCE', 'PARO', 'PROTHESE', 'PCB']}
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
