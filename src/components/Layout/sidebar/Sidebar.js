import './style.scss'
import { Link } from 'react-router-dom'
import SidebarElement from './sidebarElement/SidebarElement'
import SideBarToggle from './sidebarToggle/SidebarToggle'
import { ContextConsumer } from '../../../context'
import { useContext } from 'react'

// dashboard icons
import dashBoard from '../../../asset/icons/sidebar/dashboard.svg'
import userProfile from '../../../asset/icons/sidebar/user-solid.svg'
import usersList from '../../../asset/icons/sidebar/users-list.svg'
import addUser from '../../../asset/icons/sidebar/user-plus.svg'
import reports from '../../../asset/icons/sidebar/charts.svg'
import manageUsers from '../../../asset/icons/sidebar/manage-users.svg'
import notification from '../../../asset/icons/sidebar/bell-solid.svg'
import logout from '../../../asset/icons/sidebar/logout.svg'
import projects from '../../../asset/icons/sidebar/projects.svg'

const sideBarItems = [
    { text: 'dashboard', route: 'dashboard', icon: dashBoard },
    { text: 'users list', route: 'users-list', icon: usersList },
    { text: 'add users', route: 'add-users', icon: addUser },
    { text: 'reports', route: 'reports', icon: reports },
    { text: 'manage users', route: 'manage-users', icon: manageUsers },
    { text: 'dental charts', route: 'dental-charts', icon: projects },
    { text: 'admin profile', route: 'admin-profile', icon: userProfile },
    { text: 'notifications', route: 'notifications', icon: notification, notification: 13 },
    { text: 'logout', route: 'logout', icon: logout }
]

function SideBar() {
    const { sidebarState, toggleSidebar } = useContext(ContextConsumer)

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
        <div className={`sidebar ${sidebarState ? 'closed' : 'open'}`}>
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
            <SideBarToggle sidebarState={sidebarState} toggleSidebar={toggleSidebar} />
        </div>
    )
}

export default SideBar
