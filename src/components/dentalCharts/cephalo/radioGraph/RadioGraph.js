import './style.scss'
import { useState, useRef } from 'react'
import emptyFile from '../../../../asset/images/radioGraph.bmp'

export default function RadioGraph() {
    const FileInputRef = useRef()
    const focusInput = () => FileInputRef.current.click()

    const [file, setFile] = useState('')
    const onFileChange = (event) => {
        const imageFile = event.target.files[0]
        let previewImage = imageFile ? URL.createObjectURL(imageFile) : undefined
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
                    onChange={onFileChange}
                />
                <p className="file-picker" onClick={focusInput}>
                    click to select a radio graph
                </p>
            </div>
            {file ? (
                <img src={file} alt="radio-graph" />
            ) : (
                <div className="empty-file">
                    {' '}
                    <img src={emptyFile} alt="no-file" />{' '}
                </div>
            )}
        </div>
    )
}
