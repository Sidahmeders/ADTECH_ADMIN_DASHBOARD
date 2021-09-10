import { useState } from 'react'

import UpIcon from '../../../../asset/icons/table/upArrow.svg'
import DownIcon from '../../../../asset/icons/table/downArrow.svg'

export default function UserRow({ users }) {
    const [openTab, setOpenTab] = useState(false)

    return (
        <div className="users-list">
            {users.map((user) => {
                const { first_name, last_name, patients_names } = user
                return (
                    <div className="user">
                        <h3>
                            {first_name} {last_name}
                        </h3>
                        <img width="20px" src={openTab ? UpIcon : DownIcon} alt="arrow" />

                        <div className={`patients ${openTab ? 'open' : ''}`}>
                            {patients_names.map((patient) => {
                                return <p>{patient}</p>
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
