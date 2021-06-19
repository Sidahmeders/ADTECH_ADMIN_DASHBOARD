import '../styles/adminProfile.scss'

function getAdminUserFromLocalStorage() {
    let adminUserInfo = localStorage.getItem('adminUserInfo')
    adminUserInfo = JSON.parse(adminUserInfo)
    return adminUserInfo
}

export default function AdminProfile() {
    const adminUserInfo = getAdminUserFromLocalStorage()

    return (
        <div className="admin-profile">
            {adminUserInfo ? (
                <div className="card">
                    <p>full name: {adminUserInfo.first_name + ' ' + adminUserInfo.last_name}</p>
                    <p>birth date: {adminUserInfo.birth_date.split('T')[0]}</p>
                    <p>faculty: {adminUserInfo.faculty}</p>
                    <p>specialty: {adminUserInfo.specialty}</p>
                    <p>phone_number: {adminUserInfo.phone_number}</p>
                    <p>email: {adminUserInfo.email}</p>
                </div>
            ) : (
                ''
            )}
        </div>
    )
}
