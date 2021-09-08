import UserColumn from './UserColumn'
import PreviewImage from './PreviewImage'

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

    return (
        <div className="row">
            <PreviewImage binaryImageSrc={profile_image} />

            <p>{first_name + ' ' + last_name}</p>
            <p>{birth_date ? birth_date.split('T')[0] : ''}</p>

            <UserColumn label="role" value={role} />
            <UserColumn label="gender" value={gender} />
            <UserColumn label="grade" value={grade} />
            <UserColumn label="specialty" value={specialty} />
            <UserColumn label="year of study" value={year_of_study} />
            <UserColumn label="faculty" value={faculty} />
            <UserColumn label="phone number" value={`+${phone_number}`} />
        </div>
    )
}
