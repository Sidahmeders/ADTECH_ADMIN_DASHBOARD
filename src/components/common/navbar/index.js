import { Link } from 'react-router-dom'
import './style.scss'

export default function NavBar() {
    const markChecked = (event) => {
        const navbarEl = document.querySelectorAll('.navbar-element')
        navbarEl.forEach((item) => {
            item.classList.remove('checked')
        })
        const target = event.target.parentNode
        target.classList.add('checked')
    }

    return (
        <div className="navbar">
            <div onClick={markChecked} className="navbar-element checked">
                <Link to="/home/manage-users/1">validate users</Link>
            </div>
            <div onClick={markChecked} className="navbar-element">
                <Link to="/home/manage-users/2">search & update users</Link>
            </div>
            <div onClick={markChecked} className="navbar-element">
                <Link to="/home/manage-users/3">additinal settings</Link>
            </div>
        </div>
    )
}
