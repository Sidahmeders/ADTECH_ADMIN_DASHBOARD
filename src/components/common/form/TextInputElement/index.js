// import { useState } from 'react'
import './style.scss'
import eyeOpen from '../../../../asset/icons/form/eye-open.svg'
import eyeClose from '../../../../asset/icons/form/eye-close.svg'

export default function TextInputElement({ label, type }) {
    // const [passwordVisibilty, setPasswordVisibilty] = useState(false)
    const eye = eyeClose ? eyeClose : eyeOpen

    return (
        <div className="text-input-element">
            <label htmlFor={label}>{label}</label>
            <input type={type ? type : 'text'} id={label} />
            {type === 'password' ? (
                <img className="password-eye" width="20px" src={eye} alt="eye" />
            ) : (
                ''
            )}
        </div>
    )
}
