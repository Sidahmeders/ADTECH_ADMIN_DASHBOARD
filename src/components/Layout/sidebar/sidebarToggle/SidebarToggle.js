import './style.scss'
import expand from '../../../../asset/icons/sidebar/expand.svg'
import compress from '../../../../asset/icons/sidebar/compress.svg'

export default function SidebarToggle({ sidebarState, toggleSidebar }) {
    return (
        <div className="sidebar-toggle" onClick={toggleSidebar}>
            <img width="24px" src={sidebarState ? expand : compress} alt="toggle" />
        </div>
    )
}
