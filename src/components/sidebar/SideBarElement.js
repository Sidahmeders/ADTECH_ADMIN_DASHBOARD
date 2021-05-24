import React from 'react'
import { Link } from 'react-router-dom'

export default function SideBarElement({ clickHandler, id, text, icon }) {
    const className = 'sidebar-element'
    const route = text.split(' ').join('-')
    return (
        <Link
            to={`/home/${route}`}
            onClick={() => clickHandler(id)}
            id={id}
            className={id === 0 ? `${className} selected` : className}>
            <img width="24px" src={icon} alt={text} />
            <div className="text">{text}</div>
        </Link>
    )
}
