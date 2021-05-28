import { useState } from 'react'
import './style.scss'
import openEye from '../../../../asset/icons/form/eye-open.svg'
import closeEye from '../../../../asset/icons/form/eye-close.svg'

export default function TextInputElement({ label, value, type, changeHandler }) {
    const [passwordVisibilty, setPasswordVisibilty] = useState(true)
    const [inputType, setInputType] = useState(type)
    const eye = passwordVisibilty ? closeEye : openEye

    const handlePasswordVisibility = () => {
        setPasswordVisibilty(() => (passwordVisibilty ? false : true))
        if (passwordVisibilty) {
            setInputType(() => 'text')
        } else {
            setInputType(() => 'password')
        }
    }

    return (
        <div className="text-input-element">
            <label htmlFor={label}>{label}</label>
            <input
                type={inputType ? inputType : 'text'}
                id={label}
                name={label}
                value={value}
                onChange={changeHandler}
            />
            {type === 'password' ? (
                <img
                    className="password-eye"
                    onClick={handlePasswordVisibility}
                    width="20px"
                    src={eye}
                    alt="eye"
                />
            ) : (
                ''
            )}
        </div>
    )
}
