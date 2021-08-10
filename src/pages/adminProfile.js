import '../styles/adminProfile.scss'
import profileImage from '../asset/images/person.jpg'

function getAdminUserFromLocalStorage() {
    let adminUserInfo = localStorage.getItem('adminUserInfo')
    adminUserInfo = JSON.parse(adminUserInfo)
    return adminUserInfo
}

const getBirthDate = (birthDate) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    birthDate = birthDate.split('-')
    birthDate[1] = months[parseInt(birthDate[1])]
    birthDate = birthDate.join(' ')
    birthDate = birthDate.replace(/-/g, ', ')
    return birthDate
}

export default function AdminProfile() {
    const adminUserInfo = getAdminUserFromLocalStorage()
    let birthDate = adminUserInfo ? adminUserInfo.birth_date.split('T')[0] : ''
    birthDate = getBirthDate(birthDate)

    return (
        <div className="admin-page">
            <div className="header">
                <div className="search-contacts">
                    <input type="search" placeholder="search" id="search-contact" />
                </div>
                <div className="right-icons">
                    <div className="contacts">contacts</div>
                    <div className="allow-contacts">allow contacts</div>
                    <div className="messages">messages</div>
                    <div className="image">
                        <img src={profileImage} alt="profile" />
                    </div>
                </div>
            </div>
            <div className="admin-profile">
                {adminUserInfo ? (
                    <>
                        <div className="left">
                            <img src={profileImage} alt="profile" />
                            <div className="status">
                                <div className="faculty">
                                    faculty: <span>{adminUserInfo.faculty}</span>
                                </div>
                                <div className="specialty">
                                    specialty: <span>{adminUserInfo.specialty}</span>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="name">
                                {adminUserInfo.first_name + ' ' + adminUserInfo.last_name}
                            </div>
                            <div className="birth-date">birth date: {birthDate}</div>
                            <div className="phone">
                                phone number: <span>+213{adminUserInfo.phone_number}</span>
                            </div>
                            <div className="email">
                                email: <span>{adminUserInfo.email}</span>
                            </div>
                        </div>
                    </>
                ) : (
                    ''
                )}
            </div>
        </div>
    )
}
