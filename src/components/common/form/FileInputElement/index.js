import { useRef, useState } from 'react'
import './style.scss'

export default function FileInputElement({ label, changeHandler }) {
    const FileInputRef = useRef()
    const focusInput = () => FileInputRef.current.click()

    const [file, setFile] = useState('')
    const onFileChange = (event) => {
        const imageFile = event.target.files[0]
        let previewImage = imageFile ? URL.createObjectURL(imageFile) : undefined
        setFile(() => previewImage)
    }

    return (
        <div className="file-input-element">
            <label htmlFor={label}>{label}</label>
            <input
                style={{ display: 'none' }}
                type="file"
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
