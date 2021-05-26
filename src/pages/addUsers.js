import { useEffect, useState } from 'react'
import Fetch from '../utils/fetchData'

import RecentUsers from '../components/addUsers/RecentUsers'
import CreateUserForm from '../components/addUsers/CreateUserForm'

export default function AddUsers() {
    let [latestUsers, setLatestUsers] = useState([])

    let getUsers = async () => {
        const data = await Fetch.GET('admin/users', 12)
        setLatestUsers(() => data.users)
    }
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="add-users">
            <CreateUserForm />
            <RecentUsers users={latestUsers} />
        </div>
    )
}
