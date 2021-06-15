import { useEffect, useState } from 'react'
import Fetch from '../../../utils/fetchData'
import '../../../styles/manageUsers/searchUpdateUsers.scss'

import TextHeader from '../../common/TextHeader/index'
import UserRow from '../UserRow'
import NoFile from '../../../asset/icons/noFile.gif'

import TextInputElement from '../../common/form/TextInputElement/index'
import FileInputElement from '../../common/form/FileInputElement/index'
import DateInputElement from '../../common/form/DateInputElement/index'
import RadioInputElement from '../../common/form/RadioInputElement/index'
import ButtonElement from '../../common/form/button/index'
// import AlertStatusBar from '../../common/alert/index'

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

export default function UpdateUsers({ users }) {
    const [userInfo, setUserInfo] = useState(false)

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

    const updateUserInfo = async (userId) => {
        const response = await Fetch.POSTJson('admin/users', { id: userId }, 'PUT')

        if (response) {
            const { data } = response
            if (data) {
                setUserInfo(() => data.user)
            }
        }
    }

    console.log(userInfo)

    useEffect(() => {
        checkSelectedRadioElement(userInfo)
    }, [userInfo])

    return (
        <div className="update-users">
            <TextHeader text="search result" />
            {userInfo ? (
                <div className="selected-user-container">
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
                        {/* <AlertStatusBar message={alertMessage} /> */}
                        {/* {alertMessage.pending ? (
                            <ButtonElement disable={true} />
                        ) : ( */}
                        <div className="row buttons">
                            <ButtonElement
                                clickHandler={() => updateUserInfo(userInfo._id)}
                                label="submit the update"
                            />
                            <ButtonElement
                                clickHandler={() => updateUserInfo(userInfo._id)}
                                label="cancel the update"
                            />
                        </div>

                        {/* )} */}
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
