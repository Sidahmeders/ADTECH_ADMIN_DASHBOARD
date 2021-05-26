import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Fetch from '../utils/fetchData'
import '../styles/login.scss'

function Login() {
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    })

    const [alertMessage, setAlertMessage] = useState({
        success: '',
        error: ''
    })

    const handleOnChange = (event) => {
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
        let userData = await Fetch.POST('admin/users/login', userInfo)

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
        } else {
            setAlertMessage(() => {
                return {
                    success: '',
                    error: 'something unexpected happend, check the dev console'
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
                    <div className="alert success">{alertMessage.success}</div>
                ) : alertMessage.error ? (
                    <div className="alert error">{alertMessage.error}</div>
                ) : (
                    ''
                )}

                <form autoComplete="off" className="form_items">
                    <div className="form_inputs">
                        <input
                            onChange={handleOnChange}
                            name="email"
                            type="text"
                            value={userInfo.email}
                            required
                        />
                        <label>username or email</label>
                    </div>
                    <div className="form_inputs">
                        <input
                            onChange={handleOnChange}
                            name="password"
                            type="password"
                            value={userInfo.password}
                            autoComplete="fasle"
                            required
                        />
                        <label>password</label>
                    </div>
                    <button onClick={handleLogin} className="form_button">
                        Log In
                    </button>
                </form>
                <div className="form_other">
                    <Link to="/forgot-passowrd">forgot password?</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
