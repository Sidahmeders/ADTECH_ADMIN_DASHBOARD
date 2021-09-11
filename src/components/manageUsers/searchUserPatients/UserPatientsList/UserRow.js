import { useState } from 'react'

import UpIcon from '../../../../asset/icons/table/upArrow.svg'
import DownIcon from '../../../../asset/icons/table/downArrow.svg'

export default function UserRow({ user }) {
    const { first_name, last_name, patients_names } = user

    const [userTab, setUserTab] = useState(false)
    const toggleUserTab = () => {
        setUserTab(() => (userTab ? false : true))
    }

    return (
        <div className="user" onClick={toggleUserTab}>
            <h3>
                {first_name} {last_name}
            </h3>
            <img width="20px" src={userTab ? UpIcon : DownIcon} alt="arrow" />

            <div className={`patients ${userTab ? 'open' : ''}`}>
                {patients_names.map((patient) => {
                    return <p>{patient}</p>
                })}
            </div>
        </div>
    )
}
