import transformDate from '../../../../utils/transformDate'

import PreviewImage from '../../PreviewImage'
import EditIcon from '../../../../asset/icons/form/edit.svg'
import DeleteIcon from '../../../../asset/icons/form/minus.svg'

export default function UserRow({ user, updateUserInfo, deleteUserPermanently }) {
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
        identity_card //FIXME:
    } = user

    const birthDate = transformDate(birth_date)

    return (
        <div className={`card ${role}`}>
            <div className="head">
                <PreviewImage binaryImageSrc={profile_image} />
                <div className="text">
                    <p className="grade">{grade.replace(/_/g, ' ')}</p>
                    <p className="year-of-study">
                        {year_of_study ? year_of_study + ' ' + 'year' : '####'}
                    </p>
                    <p className="faculty">{faculty}</p>
                    <p className="specialty">{specialty ? specialty : '####'}</p>
                </div>
            </div>

            <p className="name">{first_name + ' ' + last_name}</p>
            <p className="birth-date">{birthDate}</p>
            <p className="email">{email}</p>
            <p className="phone">+{phone_number}</p>
            <div className="buttons">
                <img
                    width="30px"
                    src={EditIcon}
                    alt="edit"
                    onClick={() => updateUserInfo(user._id)}
                />
                <img
                    width="25px"
                    src={DeleteIcon}
                    alt="delete"
                    onClick={() => deleteUserPermanently(user._id)}
                />
            </div>
        </div>
    )
}
