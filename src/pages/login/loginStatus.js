function saveAdminUserInfoToLocalStorage(adminUserInfo) {
    adminUserInfo = JSON.stringify(adminUserInfo)
    localStorage.setItem('adminUserInfo', adminUserInfo)
}

function handleSuccessfulLogin(setAlertMessage, adminUserInfo) {
    setAlertMessage(() => {
        return {
            error: '',
            success: 'you are logged In welcome.'
        }
    })
    saveAdminUserInfoToLocalStorage(adminUserInfo)
    setTimeout(() => {
        window.location.href = '/home'
    }, 1500)
}

function handleFailedLogin(setAlertMessage, error) {
    setAlertMessage(() => {
        return {
            success: '',
            error: error.message
        }
    })
}

export { handleSuccessfulLogin, handleFailedLogin }
