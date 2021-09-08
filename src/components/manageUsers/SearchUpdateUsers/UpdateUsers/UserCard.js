import PreviewImage from '../../PreviewImage'
import transformDate from '../../../../utils/transformDate'

export default function UserRow({ user }) {
    const {
        first_name,
        last_name,
        birth_date,
        email,
        role,
        gender,
        grade,
        specialty,
        year_of_study,
        faculty,
        phone_number,
        profile_image,
        identity_card
    } = user

    const birthDate = transformDate(birth_date)

    return (
        <>
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
        </>
    )
}
