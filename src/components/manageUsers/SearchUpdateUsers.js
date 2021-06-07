import { useEffect, useState, useRef } from 'react'
import '../../styles/manageUsers/searchUpdateUsers.scss'
import Fetch from '../../utils/fetchData'

export default function SearchUpdateUsers() {
    const _isMounted = useRef(true)

    const [users, setUsers] = useState()

    const searchUsers = async () => {
        const data = await Fetch.Search('admin/users/search', 'first_name')
        if (_isMounted.current) {
            if (data) {
                setUsers(() => data)
            }
        }
    }

    useEffect(() => {
        searchUsers()
        return () => {
            _isMounted.current = false
        }
    }, [])

    console.log(users)

    return (
        <div>
            <div className="search-update-users">
                <h1>Serach and Update Users</h1>
            </div>
        </div>
    )
}
