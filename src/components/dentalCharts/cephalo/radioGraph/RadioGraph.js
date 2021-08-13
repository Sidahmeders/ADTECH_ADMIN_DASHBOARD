import './style.scss'
import { useState, useRef } from 'react'

export default function RadioGraph() {
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

    const changeHandler = (event) => {
        let previewImage
        const files = event.target.files
        const imageFile = files[0]
        if (imageFile) {
            previewImage = URL.createObjectURL(imageFile)
        }
        setFile(() => previewImage)
    }

    return (
        <div className="radio-graph">
            <div className="file-input-element">
                <input
                    style={{ display: 'none' }}
                    type="file"
                    name="radio-graph"
                    ref={FileInputRef}
                    onChange={(event) => {
                        onFileChange(event)
                        changeHandler(event)
                    }}
                />
                <p className="file-picker" onClick={focusInput}>
                    click to select a radio graph
                </p>
            </div>
            <img src={file} alt="skull" />
        </div>
    )
}
