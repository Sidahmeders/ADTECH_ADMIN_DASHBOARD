import { useRef, useState } from 'react'
import './style.scss'

export default function FileInputElement({ label, value, changeHandler = () => {} }) {
    const FileInputRef = useRef()
    const focusInput = () => FileInputRef.current.click()

    const [file, setFile] = useState('')
    const onFileChange = (event) => {
        const imageFile = event.target.files[0]
        setFile(() => URL.createObjectURL(imageFile))
    }

    return (
        <div className="file-input-element">
            <label htmlFor={label}>{label}</label>
            <input
                type="file"
                style={{ display: 'none' }}
                id={label}
                name={label}
                ref={FileInputRef}
                value={value}
                onChange={(event) => {
                    onFileChange(event)
                    changeHandler(event)
                }}
            />
            <p className="file-picker" onClick={focusInput}>
                click to select an image
            </p>
            <img width="300px" className="image-preview" src={file} alt="file-picker" />
        </div>
    )
}
