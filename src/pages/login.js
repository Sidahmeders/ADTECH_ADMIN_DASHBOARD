import { useState } from 'react'
import { Link } from 'react-router-dom'
import Fetch from '../utils/fetchData'
import '../styles/login.scss'

import { Success, Error } from '../components/common/alerts/index'
import ButtonElement from '../components/common/form/button/index'

const LoginInputElement = ({ label, type, name, value, changeHandler }) => {
    return (
        <div className="form_inputs">
            <input name={name} type={type} value={value} onChange={changeHandler} required />
            <label>{label}</label>
        </div>
    )
}

function Login() {
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
            if (userData.data) {
                setAlertMessage(() => {
                    return {
                        error: '',
                        success: 'you are logged In welcome.'
                    }
                })
                setTimeout(() => {
                    window.location.href = '/home'
                }, 1500)
            } else if (userData.error) {
                setAlertMessage(() => {
                    return {
                        success: '',
                        error: userData.error.message
                    }
                })
            }
        } else {
            setAlertMessage(() => {
                return {
                    success: '',
                    error: 'something unexpected happend, please check the dev console'
                }
            })
        }
    }

    return (
        <div className="login-container">
            <div className="form">
                <div className="form_logo">
                    AD<span>T</span>ECH
                </div>
                <div className="form_title">
                    ADM<span>I</span>N
                </div>

                {alertMessage.success ? (
                    <Success message={alertMessage.success} />
                ) : alertMessage.error ? (
                    <Error message={alertMessage.error} />
                ) : (
                    ''
                )}

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

export default Login
