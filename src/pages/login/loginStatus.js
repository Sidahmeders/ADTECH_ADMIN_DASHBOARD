function handleSuccessfulLogin(setAlertMessage) {
    setAlertMessage(() => {
        return {
            error: '',
            success: 'you are logged In welcome.'
        }
    })
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
