import { useEffect, useState, useRef } from 'react'
import '../../styles/manageUsers/validateUsers.scss'
import Fetch from '../../utils/fetchData'

const displayBinaryImage = (image) => {
    const base64String = new Buffer.from(image).toString('base64')
    return `data:image/jpeg;base64,${base64String}`
}

const UnAuthUserColumn = ({ label, value }) => (
    <div className="column">
        <span>{label}</span>: {value}
    </div>
)

const PreviewImage = ({ label, clickHandler, imageSrc }) => (
    <div onClick={clickHandler} className="image">
        <span>{label}</span>
        <img src={imageSrc} alt="ImagePreview" />
    </div>
)

const UnAuthUserRow = ({ user }) => {
    const {
        first_name,
        last_name,
        email,
        role,
        gender,
        grade,
        specialty,
        year_of_study,
        faculty,
        phone_number,
        profile_image,
        identity_card
    } = user

    const imageZoomIn = (event) => {
        const image = event.target.parentNode
        image.classList.toggle('zoomed-in')
    }

    return (
        <div className="row">
            <UnAuthUserColumn label="name" value={first_name + ' ' + last_name} />
            <UnAuthUserColumn label="email" value={email} />
            <UnAuthUserColumn label="role" value={role} />
            <UnAuthUserColumn label="gender" value={gender} />
            <UnAuthUserColumn label="grade" value={grade} />
            <UnAuthUserColumn label="specialty" value={specialty} />
            <UnAuthUserColumn label="year of study" value={year_of_study} />
            <UnAuthUserColumn label="faculty" value={faculty} />
            <UnAuthUserColumn label="phone number" value={`+${phone_number}`} />
            <div className="images">
                <PreviewImage
                    label="profile image"
                    imageSrc={displayBinaryImage(profile_image)}
                    clickHandler={imageZoomIn}
                />
                <PreviewImage
                    label="identity card"
                    imageSrc={displayBinaryImage(identity_card)}
                    clickHandler={imageZoomIn}
                />
            </div>
        </div>
    )
}

export default function ValidateUsers() {
    const _isMounted = useRef(true)

    const [unAuthorizedUsers, setUnAuthorizedUsers] = useState([])

    const fetchUnAuthorizedUsers = async () => {
        const data = await Fetch.GET('admin/users/unAuthorized', 15)
        if (_isMounted.current) {
            if (data) {
                setUnAuthorizedUsers(() => data.users)
            }
        }
    }

    useEffect(() => {
        fetchUnAuthorizedUsers()
        return () => {
            _isMounted.current = false
        }
    }, [])

    console.log(unAuthorizedUsers)

    return (
        <div className="validate-users">
            <div className="unAuthUsers-container">
                {unAuthorizedUsers
                    ? unAuthorizedUsers.map((user, index) => {
                          return <UnAuthUserRow key={index} user={user} />
                      })
                    : ''}
            </div>
        </div>
    )
}
