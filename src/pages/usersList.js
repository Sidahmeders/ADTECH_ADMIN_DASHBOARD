import React from 'react'
import '../styles/usersList.scss'

import BarChart from '../components/charts/BarChart'
import LineChart from '../components/charts/LineChart'

function UsersList() {
    return (
        <div className="users-list">
            <BarChart />
            <LineChart />
        </div>
    )
}

export default UsersList
