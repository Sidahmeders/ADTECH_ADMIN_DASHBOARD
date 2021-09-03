import './style.scss'
import leftArrows from '../../../../asset/icons/sidebar/double-arrow.svg'

export default function SidebarToggle({ toggleSidebar }) {
    return (
        <div className="sidebar-toggle" onClick={toggleSidebar}>
            <img width="24px" src={leftArrows} alt="toggle" />
        </div>
    )
}
