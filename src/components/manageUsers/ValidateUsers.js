import { useEffect, useState } from 'react'
import '../../styles/manageUsers/validateUsers.scss'
import Fetch from '../../utils/fetchData'

const displayBinaryImage = (image) => {
    const base64String = new Buffer.from(image).toString('base64')
    return `data:image/jpeg;base64,${base64String}`
}

const UnAuthUser = ({ user }) => {
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
            <div className="column">
                <span>name</span>: {first_name} {last_name}
            </div>
            <div className="column">
                <span>email</span>: {email}
            </div>
            <div className="column">
                <span>role</span>: {role}
            </div>
            <div className="column">
                <span>gender</span>: {gender}
            </div>
            <div className="column">
                <span>grade</span>: {grade}
            </div>
            <div className="column">
                <span>specialty</span>: {specialty}
            </div>
            <div className="column">
                <span>year of study</span>: {year_of_study}
            </div>
            <div className="column">
                <span>faculty</span>: {faculty}
            </div>
            <div className="column">
                <span>phone number</span>: +{phone_number}
            </div>
            <div className="images">
                <div onClick={imageZoomIn} className="image">
                    <span> profile image</span>
                    <img src={displayBinaryImage(profile_image)} alt="profileImage" />
                </div>
                <div onClick={imageZoomIn} className="image">
                    <span>identity card</span>
                    <img src={displayBinaryImage(identity_card)} alt="identityCard" />
                </div>
            </div>
        </div>
    )
}

export default function ValidateUsers() {
    const [unAuthorizedUsers, setUnAuthorizedUsers] = useState([])

    const fetchUnAuthorizedUsers = async () => {
        const data = await Fetch.GET('admin/users/unAuthorized', 15)
        if (data) {
            setUnAuthorizedUsers(() => data.users)
        }
    }

    useEffect(() => {
        fetchUnAuthorizedUsers()
    }, [])

    console.log(unAuthorizedUsers)

    return (
        <div className="validate-users">
            <div className="unAuthUsers-container">
                {unAuthorizedUsers
                    ? unAuthorizedUsers.map((user, index) => {
                          return <UnAuthUser key={index} user={user} />
                      })
                    : ''}
            </div>
        </div>
    )
}
