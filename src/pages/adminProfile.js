function getAdminUserFromLocalStorage() {
    let adminUserInfo = localStorage.getItem('adminUserInfo')
    adminUserInfo = JSON.parse(adminUserInfo)
    return adminUserInfo
}

export default function AdminProfile() {
    const adminUserInfo = getAdminUserFromLocalStorage()
    console.log(adminUserInfo)

    return (
        <div>
            <h2>Admin Profile Page</h2>
        </div>
    )
}
