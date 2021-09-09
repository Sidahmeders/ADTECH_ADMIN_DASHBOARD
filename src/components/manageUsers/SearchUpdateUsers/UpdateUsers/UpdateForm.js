import TextHeader from '../../../common/TextHeader/index'
import TextInputElement from '../../../common/form/TextInputElement/index'
import DateInputElement from '../../../common/form/DateInputElement/index'
import RadioInputElement from '../../../common/form/RadioInputElement/index'
import ButtonElement from '../../../common/form/button/index'
import AlertStatusBar from '../../../common/alert/index'

export default function UpdateForm({
    sidebarState,
    userInfo,
    hadnleUserInfoChange,
    alertMessage,
    submitUpdate,
    cancelUpdate
}) {
    return (
        <div style={{ left: sidebarState ? '60px' : '220px' }} className="selected-user-container">
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
                    options={['student', 'resident', 'assistant', 'master_assistant', 'professor']}
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
    )
}
