import React from 'react'
import '../styles/addUsers.scss'

const Row = (props, key) => {
    const { name, age, faculty, role, date } = props
    return (
        <div key={key} className="row">
            <div className="column">{name ? name : 'name'}</div>
            <div className="column">{age ? age : 'age'}</div>
            <div className="column">{faculty ? faculty : 'faculty'}</div>
            <div className="column">{role ? role : 'role'}</div>
            <div className="column">{date ? date : 'date'}</div>
        </div>
    )
}

export default function AddUsers() {
    const hardCodedUsers = [
        { name: 'jhon Doe', age: 23, faculty: 'Oran', role: 'student', date: '12-06-2021' },
        { name: 'jhon Doe', age: 23, faculty: 'Oran', role: 'student', date: '12-06-2021' },
        { name: 'jhon Doe', age: 23, faculty: 'Oran', role: 'student', date: '12-06-2021' },
        { name: 'jhon Doe', age: 23, faculty: 'Oran', role: 'student', date: '12-06-2021' }
    ]

    return (
        <div className="add-users">
            <h1>Hello from Add Users</h1>

            <div className="recent-users">
                <h2>recently added users</h2>
                <Row />
                {hardCodedUsers.map((user, index) => Row(user, index))}
            </div>
        </div>
    )
}
