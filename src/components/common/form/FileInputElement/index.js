import { useRef, useState } from 'react'
import './style.scss'

export default function FileInputElement({ label, changeHandler }) {
    const FileInputRef = useRef()
    const focusInput = () => FileInputRef.current.click()

    const [file, setFile] = useState('')
    const onFileChange = (event) => {
        const previewImage = URL.createObjectURL(event.target.files[0])
        setFile(() => previewImage)
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
                onChange={(event) => {
                    onFileChange(event)
                    changeHandler(event)
                }}
            />
            <p className="file-picker" onClick={focusInput}>
                click to select an image
            </p>
            <img id="image-preview" src={file} alt="file-picker" />
        </div>
    )
}
