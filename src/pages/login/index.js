import { useState } from 'react'
import { Link } from 'react-router-dom'
import Fetch from '../../utils/fetchData'
import '../../styles/login.scss'

import AlertStatusBar from '../../components/common/alert/index'
import ButtonElement from '../../components/common/form/button/index'
import { handleSuccessfulLogin, handleFailedLogin } from './loginStatus'
import LoginInputElement from './InputElement'

export default function LoginPage() {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })

    const [alertMessage, setAlertMessage] = useState({
        success: '',
        error: ''
    })

    const handleUserInfoChange = (event) => {
        const value = event.target.value
        const entry = event.target.name
        setUserInfo(() => {
            return {
                ...userInfo,
                [entry]: value
            }
        })
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        let userData = await Fetch.POSTJson('admin/users/login', userInfo, 'json')

        if (userData) {
            const { data, error } = userData
            if (data) {
                handleSuccessfulLogin(setAlertMessage)
            } else if (error) {
                handleFailedLogin(setAlertMessage, error)
            } else {
                setAlertMessage(() => {
                    return {
                        success: '',
                        error: 'something unexpected happend, please check the dev console'
                    }
                })
            }
        }
    }

    return (
        <div className="login-container">
            <div className="login-form">
                <div className="form_logo">
                    AD<span>T</span>ECH
                </div>
                <div className="form_title">
                    ADM<span>I</span>N
                </div>

                <AlertStatusBar message={alertMessage} />

                <form autoComplete="off" className="form_items">
                    <LoginInputElement
                        label="username or email"
                        name="email"
                        type="text"
                        value={userInfo.email}
                        changeHandler={handleUserInfoChange}
                    />
                    <LoginInputElement
                        label="password"
                        name="password"
                        type="password"
                        value={userInfo.password}
                        changeHandler={handleUserInfoChange}
                    />
                    <ButtonElement clickHandler={handleLogin} label="login" />
                </form>
                <div className="forgot-password">
                    <Link to="/forgot-passowrd">forgot password?</Link>
                </div>
            </div>
        </div>
    )
}
