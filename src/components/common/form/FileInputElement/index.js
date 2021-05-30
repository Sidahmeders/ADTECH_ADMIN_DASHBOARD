import { useRef, useState } from 'react'
import './style.scss'

export default function FileInputElement({ label, changeHandler }) {
    const FileInputRef = useRef()
    const focusInput = () => FileInputRef.current.click()

    const [file, setFile] = useState('')
    const onFileChange = (event) => {
        let previewImage
        const imageFile = event.target.files[0]
        if (imageFile) {
            previewImage = URL.createObjectURL(imageFile)
        }
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
