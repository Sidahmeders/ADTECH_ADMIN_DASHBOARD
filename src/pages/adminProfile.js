import '../styles/adminProfile.scss'

import profileImage from '../asset/images/person.jpg'

function getAdminUserFromLocalStorage() {
    let adminUserInfo = localStorage.getItem('adminUserInfo')
    adminUserInfo = JSON.parse(adminUserInfo)
    return adminUserInfo
}

export default function AdminProfile() {
    const adminUserInfo = getAdminUserFromLocalStorage()

    return (
        <>
            {adminUserInfo ? (
                <div className="admin-profile">
                    <img width="250px" src={profileImage} alt="profile-image" />
                    <div className="card">
                        <p>full name: {adminUserInfo.first_name + ' ' + adminUserInfo.last_name}</p>
                        <p>birth date: {adminUserInfo.birth_date.split('T')[0]}</p>
                        <p>faculty: {adminUserInfo.faculty}</p>
                        <p>specialty: {adminUserInfo.specialty}</p>
                        <p>phone_number: {adminUserInfo.phone_number}</p>
                        <p>email: {adminUserInfo.email}</p>
                    </div>
                </div>
            ) : (
                ''
            )}
        </>
    )
}
