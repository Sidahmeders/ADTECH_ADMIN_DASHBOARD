import UserColumn from './UserColumn'
import PreviewImage from './PreviewImage'

export default function UserRow({ user }) {
    const {
        first_name,
        last_name,
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
            <UserColumn label="name" value={first_name + ' ' + last_name} />
            <UserColumn label="email" value={email} />
            <UserColumn label="role" value={role} />
            <UserColumn label="gender" value={gender} />
            <UserColumn label="grade" value={grade} />
            <UserColumn label="specialty" value={specialty} />
            <UserColumn label="year of study" value={year_of_study} />
            <UserColumn label="faculty" value={faculty} />
            <UserColumn label="phone number" value={`+${phone_number}`} />
            <div className="images">
                <PreviewImage label="profile image" binaryImageSrc={profile_image} />
                <PreviewImage label="identity card" binaryImageSrc={identity_card} />
            </div>
        </div>
    )
}
