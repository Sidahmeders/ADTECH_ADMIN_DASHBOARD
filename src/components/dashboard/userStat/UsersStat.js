import './style.scss'
import BarChart from '../../charts/BarChart'
import LineChart from '../../charts/LineChart'
import PieChart from '../../charts/DoughChart'

export default function DashBoard() {
    const colors = []
    for (let i = 0; i <= 6; i++) {
        colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
    }

    const chartData = {
        labels: ['02', '23', '31', '13', '44', '16'],
        datasets: [
            {
                label: 'active',
                data: [54, 79, 59, 63, 39, 67],
                backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
                borderWidth: 2,
                borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`
            },
            {
                label: 'total',
                data: [80, 92, 69, 73, 60, 85],
                backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
                borderWidth: 2,
                borderColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`
            }
        ]
    }

    const pieChartData = {
        labels: ['PCB', 'ODF', 'PARO', 'OCE', 'PROTH'],
        datasets: [
            {
                backgroundColor: [...colors],
                data: [65, 59, 80, 81, 56]
            }
        ]
    }

    return (
        <div className="users-stat">
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
