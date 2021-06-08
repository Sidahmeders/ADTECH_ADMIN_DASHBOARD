function displayBinaryImage(image) {
    const base64String = new Buffer.from(image).toString('base64')
    return `data:image/jpeg;base64,${base64String}`
}

export default function PreviewImage({ label, binaryImageSrc }) {
    const imageZoomIn = (event) => {
        const image = event.target.parentNode
        image.classList.toggle('zoomed-in')
    }

    return (
        <div onClick={imageZoomIn} className="image">
            {binaryImageSrc ? (
                <>
                    <span>{label}</span>
                    <img src={displayBinaryImage(binaryImageSrc)} alt="ImagePreview" />{' '}
                </>
            ) : (
                ''
            )}
        </div>
    )
}
