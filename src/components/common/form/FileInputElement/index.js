import { useRef, useState } from 'react'
import './style.scss'

export default function FileInputElement({ label }) {
    const FileInputRef = useRef()

    const focusInput = () => {
        FileInputRef.current.click()
    }

    const [userFiles, setUserFiles] = useState({
        file: '',
        tempFile: ''
    })

    const onFileChange = (event) => {
        setUserFiles({
            file: event.target.files[0],
            tempFile: URL.createObjectURL(event.target.files[0])
        })
    }

    console.log(userFiles)

    return (
        <div className="file-input-element">
            <label>{label}</label>
            <input
                type="file"
                onChange={onFileChange}
                ref={FileInputRef}
                style={{ display: 'none' }}
            />
            <p className="file-picker" onClick={focusInput}>
                click to select an image
            </p>
            <img width="300px" className="image-preview" src={userFiles.tempFile} alt="myfile" />
        </div>
    )
}
