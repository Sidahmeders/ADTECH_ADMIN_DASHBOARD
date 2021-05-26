import React, { useEffect, useState } from 'react'
import Fetch from '../utils/fetchData'
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

function getAge(dateString) {
    var today = new Date()
    var birthDate = new Date(dateString)
    var age = today.getFullYear() - birthDate.getFullYear()
    var m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
    }
    return age > 1 ? age : 1
}

const formatUsersData = (users) => {
    const filteredUsers = []

    users.forEach((user) => {
        let tempUser = {}
        tempUser.name = user.first_name + ' ' + user.last_name
        tempUser.age = getAge(user.birth_date)
        tempUser.faculty = user.faculty
        tempUser.role = user.role
        tempUser.date = user.date_of_creation.split('T')[0]
        filteredUsers.push(tempUser)
    })

    return filteredUsers
}

export default function AddUsers() {
    let [latestUsers, setLatestUsers] = useState([])

    let getUsers = async () => {
        const data = await Fetch.GET('admin/users', 12)
        setLatestUsers(() => data.users)
    }
    useEffect(() => {
        getUsers()
    }, [])

    const recentlyAddedUsers = formatUsersData(latestUsers)

    return (
        <div className="add-users">
            <div className="create-user">
                <form></form>
            </div>

            <div className="recent-users">
                <h2>recently added users</h2>
                <Row />
                {recentlyAddedUsers.map((user, index) => Row(user, index))}
            </div>
        </div>
    )
}
