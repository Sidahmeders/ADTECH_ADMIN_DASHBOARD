import React from 'react'
import '../styles/usersList.scss'

import BarChart from '../components/charts/BarChart'
import LineChart from '../components/charts/LineChart'

function UsersList() {
    const barChartData = {
        labels: ['Chlef', 'Bel-3abas', 'Oran', 'Rilizane', 'Blida', 'Telemsan'],
        datasets: [
            {
                label: 'active users',
                data: [54, 79, 59, 63, 39, 67],
                backgroundColor: ['#963', '#384', '#468', '#774', '#989', '#d73']
            },
            {
                label: 'total users',
                data: [80, 92, 69, 73, 60, 85],
                backgroundColor: ['#965', '#386', '#46d', '#776', '#98f', '#d75']
            }
        ]
    }

    const lineChartData = {
        labels: [
            'Januray',
            'Febuary',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'Septemebr'
        ],
        datasets: [
            {
                label: 'Hours spent on the app',
                data: [34, 59, 39, 43, 19, 47, 23, 41, 29],
                backgroundColor: [
                    '#963',
                    '#384',
                    '#468',
                    '#774',
                    '#989',
                    '#d73',
                    '#455',
                    '#198',
                    '#d56'
                ]
            }
        ]
    }

    return (
        <div className="users-list">
            <BarChart chartData={barChartData} />
            <LineChart chartData={lineChartData} />
        </div>
    )
}

export default UsersList
