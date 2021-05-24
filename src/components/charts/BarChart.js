import React from 'react'
import { Bar } from 'react-chartjs-2'

const BarChart = () => {
    const chartData = {
        data: {
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
        },
        display: {
            title: {
                display: true,
                text: 'Algeria biggest Mistake',
                fontSize: 24
            },
            legend: {
                position: 'left',
                labels: {
                    fontColor: '#fff'
                }
            },
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
            <Bar
                data={chartData.data}
                options={{
                    title: chartData.display.title,
                    legend: chartData.display.legend,
                    layout: chartData.display.layout
                }}
            />
        </div>
    )
}

export default BarChart
