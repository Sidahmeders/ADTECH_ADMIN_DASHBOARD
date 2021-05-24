import React from 'react'
import { Pie } from 'react-chartjs-2'

export default function PieChart() {
    const chartData = {
        data: {
            labels: ['ODF', 'PARO', 'OCE', 'Prothese', 'PCB'],
            datasets: [
                {
                    data: [34, 52, 39, 43, 19],
                    backgroundColor: ['green', 'blue', 'orange', 'pink', 'red']
                }
            ]
        },
        display: {
            layout: {
                padding: {
                    left: 50,
                    top: 20
                }
            }
        }
    }

    return (
        <div className="chart">
            <div className="break"></div>
            <Pie
                data={chartData.data}
                options={{
                    layout: chartData.display.layout
                }}
            />
        </div>
    )
}
