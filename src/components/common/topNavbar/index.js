import { Link } from 'react-router-dom'
import './style.scss'

const NavbarElement = ({ clickHandler, href, text, isChecked }) => {
    return (
        <div onClick={clickHandler} className={`navbar-element ${isChecked ? 'checked' : ''}`}>
            <Link to={href}>{text}</Link>
        </div>
    )
}

export default function TopNavbar({ navLinks }) {
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
            {navLinks.map((item, index) => (
                <NavbarElement
                    key={index}
                    clickHandler={markChecked}
                    text={item.text}
                    href={item.href}
                    isChecked={index === 0 ? true : false}
                />
            ))}
        </div>
    )
}
