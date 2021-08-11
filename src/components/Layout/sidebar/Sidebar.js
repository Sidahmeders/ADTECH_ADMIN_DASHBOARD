import { Link } from 'react-router-dom'
import './sidebar.scss'
import SidebarElement from './SidebarElement'
import SideBarToggle from './sidebarToggle'

// import LocalStorage from '../../../utils/localStorage'

// dashboard icons
import dashBoard from '../../../asset/icons/dashboard/dashboard.svg'
import userProfile from '../../../asset/icons/dashboard/user-solid.svg'
import usersList from '../../../asset/icons/dashboard/users-solid.svg'
import addUser from '../../../asset/icons/dashboard/user-plus.svg'
import reports from '../../../asset/icons/dashboard/charts.svg'
import newUsers from '../../../asset/icons/dashboard/new-users.svg'
import notification from '../../../asset/icons/dashboard/bell-solid.svg'
import logout from '../../../asset/icons/dashboard/logout.svg'
import projects from '../../../asset/icons/dashboard/projects.svg'

const sideBarItems = [
    { text: 'dashboard', route: 'dashboard', icon: dashBoard },
    { text: 'users list', route: 'users-list', icon: usersList },
    { text: 'add users', route: 'add-users', icon: addUser },
    { text: 'reports', route: 'reports', icon: reports },
    { text: 'manage users', route: 'manage-users', icon: newUsers },
    { text: 'dental charts', route: 'dental-charts', icon: projects },
    { text: 'admin profile', route: 'admin-profile', icon: userProfile },
    { text: 'notifications', route: 'notifications', icon: notification, notification: 13 },
    { text: 'logout', route: 'logout', icon: logout }
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
            <Link onClick={() => handleRouteChange(null)} to="/home" className="logo">
                AD<span>T</span>ECH
            </Link>
            {sideBarItems.map((item, index) => (
                <SidebarElement
                    id={index}
                    key={index}
                    text={item.text}
                    icon={item.icon}
                    route={item.route}
                    notification={item.notification}
                    clickHandler={handleRouteChange}
                />
            ))}
            <SideBarToggle />
        </div>
    )
}

export default SideBar
