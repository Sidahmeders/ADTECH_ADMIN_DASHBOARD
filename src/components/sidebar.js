import React from 'react'
import '../styles/sidebar.scss'

// dashboard icons
import dashBoard from '../asset/icons/dashboard/dashboard.svg'
import userProfile from '../asset/icons/dashboard/user-solid.svg'
import usersList from '../asset/icons/dashboard/users-solid.svg'
import addUser from '../asset/icons/dashboard/user-plus.svg'
import patientsList from '../asset/icons/dashboard/people.svg'
import newUsers from '../asset/icons/dashboard/new-users.svg'
import notification from '../asset/icons/dashboard/bell-solid.svg'
import logout from '../asset/icons/dashboard/logout.svg'

function SideBar() {
    const handleRouteChange = (id) => {
        const sideBarElements = document.querySelectorAll('.sidebar-element')
        sideBarElements.forEach((item, index) => {
            if (id === index + 1) {
                item.classList.add('selected')
                const routeLink = item.children[0].alt
            } else {
                item.classList.remove('selected')
            }
        })
    }

    return (
        <div className="sidebar">
            <div className="logo">
                AD<span>T</span>ECH
            </div>
            <div onClick={() => handleRouteChange(1)} id="1" className="sidebar-element selected">
                <img width="24px" src={dashBoard} alt="dashboard" />
                <div className="text">DashBoard</div>
            </div>
            <div onClick={() => handleRouteChange(2)} id="2" className="sidebar-element">
                <img width="24px" src={userProfile} alt="user-profile" />
                <div className="text">User Profile</div>
            </div>
            <div onClick={() => handleRouteChange(3)} id="3" className="sidebar-element">
                <img width="24px" src={usersList} alt="users-list" />
                <div className="text">Users List</div>
            </div>
            <div onClick={() => handleRouteChange(4)} id="4" className="sidebar-element">
                <img width="24px" src={addUser} alt="add-user" />
                <div className="text">Add Users</div>
            </div>
            <div onClick={() => handleRouteChange(5)} id="5" className="sidebar-element">
                <img width="24px" src={patientsList} alt="patients-list" />
                <div className="text">Patients List</div>
            </div>
            <div onClick={() => handleRouteChange(6)} id="6" className="sidebar-element">
                <img width="24px" src={newUsers} alt="new-users" />
                <div className="text">New Users</div>
            </div>
            <div onClick={() => handleRouteChange(7)} id="7" className="sidebar-element">
                <img width="24px" src={notification} alt="notification" />
                <div className="text">Notifications</div>
            </div>
            <div onClick={() => handleRouteChange(8)} id="8" className="sidebar-element">
                <img width="24px" src={logout} alt="logout" />
                <div className="text">Logout</div>
            </div>
        </div>
    )
}

export default SideBar
