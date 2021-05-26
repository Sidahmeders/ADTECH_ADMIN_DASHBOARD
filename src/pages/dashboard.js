import '../styles/dashboard.scss'

import BarChart from '../components/charts/BarChart'
import LineChart from '../components/charts/LineChart'
import PieChart from '../components/charts/DoughChart'

export default function DashBoard() {
    const chartData = {
        labels: ['02', '23', '31', '13', '44', '16'],
        datasets: [
            {
                label: 'active',
                data: [54, 79, 59, 63, 39, 67],
                backgroundColor: '#dff',
                borderWidth: 2,
                borderColor: '#9007'
            },
            {
                label: 'total',
                data: [80, 92, 69, 73, 60, 85],
                backgroundColor: '#456',
                borderWidth: 2,
                borderColor: '#7f66'
            }
        ]
    }

    const pieChartData = {
        labels: ['PCB', 'ODF', 'PARO', 'OCE', 'PROTH'],
        datasets: [
            {
                backgroundColor: ['#B21F00', '#C9DE00', '#2FDE00', '#00A6B4', '#6800B4'],
                hoverBackgroundColor: ['#501800', '#4B5000', '#175000', '#003350', '#35014F'],
                data: [65, 59, 80, 81, 56]
            }
        ]
    }

    return (
        <div className="dashboard">
            <div className="cards">
                <div className="right">
                    <div className="card">
                        <h1>total users</h1>
                        <p>1134</p>
                        <BarChart chartData={chartData} />
                    </div>
                    <div className="card">
                        <h1>total patients</h1>
                        <p>6374</p>
                        <LineChart chartData={chartData} />
                    </div>
                </div>
                <div className="left">
                    <div className="card">
                        <h1>total patients record</h1>
                        <p>14756</p>
                        <PieChart chartData={pieChartData} />
                    </div>
                </div>
            </div>
        </div>
    )
}
