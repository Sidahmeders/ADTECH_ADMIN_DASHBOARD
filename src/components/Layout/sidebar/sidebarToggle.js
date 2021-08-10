import './sidebarToggle.scss'
import expand from '../../../asset/icons/dashboard/expand.svg'
import compress from '../../../asset/icons/dashboard/compress.svg'

export default function sidebarToggle() {
    const state = false
    return (
        <div className="sidebar-toggle">
            <img width="24px" src={state ? expand : compress} alt="toggle" />
        </div>
    )
}
