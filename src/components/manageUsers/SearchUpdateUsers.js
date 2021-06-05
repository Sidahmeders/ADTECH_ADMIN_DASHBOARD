import { useState } from 'react'
import Fetch from '../../utils/fetchData'

export default function SearchUpdateUsers() {
    const [unAuthorizedUsers, setUnAuthorizedUsers] = useState([])

    const fetchUnAuthorizedUsers = () => {
        const response = Fetch.GET()
    }

    return (
        <div>
            <div className="search-update-users">
                <h1>Serach and Update Users</h1>
            </div>
        </div>
    )
}
