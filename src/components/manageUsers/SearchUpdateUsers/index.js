import { useState } from 'react'

import SearchUsers from './SearchUsers'
import UpdateUsers from './UpdateUsers'

export default function SearchUpdateUsers() {
    const [users, setUsers] = useState([])

    return (
        <div className="search-update-users">
            <SearchUsers setUsers={setUsers} />
            <UpdateUsers users={users} />
        </div>
    )
}
