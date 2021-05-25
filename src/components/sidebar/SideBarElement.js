import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBarElement({ clickHandler, id, text, icon }) {
    const route = text.split(' ').join('-')
    return (
        <Link
            to={`/home/${route}`}
            onClick={() => clickHandler(id)}
            id={id}
            className="sidebar-element">
            <img width="24px" src={icon} alt={text} />
            <div className="text">{text}</div>
        </Link>
    )
}
