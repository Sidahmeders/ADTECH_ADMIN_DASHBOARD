import { useEffect, useState } from 'react'
import '../styles/addUsers/index.scss'
import Fetch from '../utils/fetchData'

import TextHeader from '../components/common/TextHeader/index'
import RecentUsers from '../components/addUsers/RecentUsers'
import CreateUserForm from '../components/addUsers/CreateUserForm'

export default function AddUsers() {
    const [alertMessage, setAlertMessage] = useState({
        success: '',
        pending: '',
        error: ''
    })

    const [latestUsers, setLatestUsers] = useState([])

    const getLatestUsers = async () => {
        const response = await Fetch.GET('admin/users', 12)
        if (response) {
            const { data } = response
            if (data) {
                setLatestUsers(() => data.users)
            }
        }
    }

    const clearInputFields = () => {
        document.getElementById('createUsers-form').reset()
        document.querySelectorAll('.radio-element').forEach((item) => (item.checked = false))
        document.querySelectorAll('#image-preview').forEach((item) => (item.src = ''))
    }

    useEffect(() => {
        clearInputFields()
        getLatestUsers()
    }, [alertMessage.success])

    return (
        <div className="add-users">
            <TextHeader text="create new users" />
            <CreateUserForm alertMessage={alertMessage} setAlertMessage={setAlertMessage} />
            <TextHeader text="recently added users" />
            <RecentUsers users={latestUsers} />
        </div>
    )
}
