import { useState } from 'react'
import transformDate from '../../../../utils/transformDate'
import formatLogActivity from '../../../../utils/formatLogActivity'

import PreviewImage from '../../PreviewImage'
import EditIcon from '../../../../asset/icons/form/edit.svg'
import DeleteIcon from '../../../../asset/icons/form/minus.svg'

export default function UserRow({ user, setUserToUpdate, deleteUserPermanently }) {
    const {
        first_name,
        last_name,
        birth_date,
        email,
        grade,
        specialty,
        year_of_study,
        faculty,
        phone_number,
        profile_image,
        role,
        activity_logs
    } = user

    const [userToDelete, setUserToDelete] = useState(false)
    const deleteUserRequest = (user) => {
        setUserToDelete(user)
    }

    const cancelDelete = () => {
        setUserToDelete(() => false)
    }

    const confirmDelete = () => {
        const userId = userToDelete._id
        deleteUserPermanently(userId)
        setUserToDelete(false)
    }

    return (
        <div className={`card ${role}`}>
            <div className="header">
                <PreviewImage binaryImageSrc={profile_image} />
                <div className="text">
                    <p className="grade">{grade ? grade.replace(/_/g, ' ') : ''}</p>
                    <p className="year-of-study">
                        {year_of_study ? year_of_study + ' ' + 'year' : '####'}
                    </p>
                    <p className="faculty">{faculty}</p>
                    <p className="specialty">{specialty ? specialty : '####'}</p>
                </div>
            </div>

            <p className="name">{first_name + ' ' + last_name}</p>
            <p className="birth-date">Born In {transformDate(birth_date)}</p>
            <p className="email">{email}</p>
            <p className="phone">{phone_number ? `+${phone_number}` : '####'}</p>

            <p className="last-activity">
                <span>latest activity:</span>
                {formatLogActivity(activity_logs)}
            </p>

            <div className="card-buttons">
                <img
                    width="30px"
                    src={EditIcon}
                    alt="edit"
                    onClick={() => setUserToUpdate(user._id)}
                />
                <img
                    width="25px"
                    src={DeleteIcon}
                    alt="delete"
                    onClick={() => deleteUserRequest(user)}
                />
                <div className={`confirm-tab ${userToDelete ? 'active' : ''}`}>
                    <h3>Warning: deleting any user can not be reversed. </h3>
                    <p>
                        if you are sure to delete
                        <span className="username">{`${user.first_name}  ${user.last_name}`}</span>
                        click on confirm
                    </p>
                    <div className="tab-buttons">
                        <div className="cancel" onClick={cancelDelete}>
                            cancel
                        </div>
                        <div className="delete" onClick={confirmDelete}>
                            confirm
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
