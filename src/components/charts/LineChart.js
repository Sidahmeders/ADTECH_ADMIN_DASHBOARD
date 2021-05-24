import React from 'react'
import { Line } from 'react-chartjs-2'

export default function LineChart() {
    const chartData = {
        data: {
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
        },
        display: {
            title: {
                display: true,
                text: 'Algeria biggest Mistake',
                fontSize: 24
            },
            legend: {
                position: 'right',
                labels: {
                    fontColor: '#880'
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
            <div className="break"></div>
            <Line
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
