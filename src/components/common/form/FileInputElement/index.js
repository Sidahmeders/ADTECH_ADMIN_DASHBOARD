import { useRef, useState } from 'react'
import './style.scss'

export default function FileInputElement({ label }) {
    const FileInputRef = useRef()
    const focusInput = () => FileInputRef.current.click()

    const [file, setFile] = useState('')
    const onFileChange = (event) => {
        setFile(() => URL.createObjectURL(event.target.files[0]))
    }

    return (
        <div className="file-input-element">
            <label>{label}</label>
            <input
                type="file"
                ref={FileInputRef}
                onChange={onFileChange}
                style={{ display: 'none' }}
            />
            <p className="file-picker" onClick={focusInput}>
                click to select an image
            </p>
            <img width="300px" className="image-preview" src={file} alt="file-picker" />
        </div>
    )
}
