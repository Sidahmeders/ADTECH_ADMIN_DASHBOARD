import { useEffect, useState, useRef } from 'react'
import '../../../styles/manageUsers/validateUsers.scss'
import Fetch from '../../../utils/fetchData'

import UserRow from '../UserRow'

export default function ValidateUsers() {
    const _isMounted = useRef(true)

    const [unAuthorizedUsers, setUnAuthorizedUsers] = useState([])

    const fetchUnAuthorizedUsers = async () => {
        const response = await Fetch.GET('admin/users/unAuthorized', 15)
        if (_isMounted.current) {
            const { data } = response
            if (data) {
                setUnAuthorizedUsers(() => data.users)
            }
        }
    }

    useEffect(() => {
        fetchUnAuthorizedUsers()
        return () => {
            _isMounted.current = false
        }
    }, [])

    return (
        <div className="validate-users">
            <div className="unAuthUsers-container">
                {unAuthorizedUsers
                    ? unAuthorizedUsers.map((user, index) => {
                          return <UserRow key={index} user={user} />
                      })
                    : ''}
            </div>
        </div>
    )
}
