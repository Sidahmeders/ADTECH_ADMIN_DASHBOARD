import React from 'react'
import '../../styles/sidebar.scss'
import SideBarElement from './SideBarElement'

// dashboard icons
import dashBoard from '../../asset/icons/dashboard/dashboard.svg'
import userProfile from '../../asset/icons/dashboard/user-solid.svg'
import usersList from '../../asset/icons/dashboard/users-solid.svg'
import addUser from '../../asset/icons/dashboard/user-plus.svg'
import patientsList from '../../asset/icons/dashboard/people.svg'
import newUsers from '../../asset/icons/dashboard/new-users.svg'
import notification from '../../asset/icons/dashboard/bell-solid.svg'
import logout from '../../asset/icons/dashboard/logout.svg'
import { Link } from 'react-router-dom'

const sideBarItems = [
    { text: 'dashboard', icon: dashBoard },
    { text: 'user profile', icon: userProfile },
    { text: 'users list', icon: usersList },
    { text: 'add users', icon: addUser },
    { text: 'patients list', icon: patientsList },
    { text: 'new users', icon: newUsers },
    { text: 'notifications', icon: notification },
    { text: 'logout', icon: logout }
]

function SideBar() {
    const handleRouteChange = (id) => {
        const sideBarElements = document.querySelectorAll('.sidebar-element')
        sideBarElements.forEach((item, index) => {
            if (id === index) {
                item.classList.add('selected')
            } else {
                item.classList.remove('selected')
            }
        })
    }

    return (
        <div className="sidebar">
            <Link to="/home" className="logo">
                AD<span>T</span>ECH
            </Link>
            {sideBarItems.map((item, index) => (
                <SideBarElement
                    id={index}
                    key={index}
                    text={item.text}
                    icon={item.icon}
                    clickHandler={handleRouteChange}
                />
            ))}
        </div>
    )
}

export default SideBar
