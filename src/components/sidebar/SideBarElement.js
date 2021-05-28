import { Link } from 'react-router-dom'

export default function SideBarElement({ clickHandler, id, text, icon, notification }) {
    const route = text.split(' ').join('-')
    return (
        <Link
            to={`/home/${route}`}
            onClick={() => clickHandler(id)}
            id={id}
            className={`sidebar-element ${route}-btn`}>
            <img width="24px" src={icon} alt={text} />
            {notification ? <span className="circle">{notification}</span> : ''}
            <div className="text">{text}</div>
        </Link>
    )
}
