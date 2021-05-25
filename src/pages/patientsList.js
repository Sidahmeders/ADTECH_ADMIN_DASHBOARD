import React from 'react'
import '../styles/patientsList.scss'

import PieChart from '../components/charts/PieChart'
import DoughChart from '../components/charts/DoughChart'

export default function PatientsList() {
    const chartsData = {
        labels: ['PCB', 'ODF', 'PARO', 'OCE', 'prothese'],
        datasets: [
            {
                backgroundColor: ['#B21F00', '#C9DE00', '#2FDE00', '#00A6B4', '#6800B4'],
                hoverBackgroundColor: ['#501800', '#4B5000', '#175000', '#003350', '#35014F'],
                data: [65, 59, 80, 81, 56]
            }
        ]
    }

    return (
        <div className="patients-list">
            <PieChart chartData={chartsData} />
            <DoughChart chartData={chartsData} />
        </div>
    )
}
