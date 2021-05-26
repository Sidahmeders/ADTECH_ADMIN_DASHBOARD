import { Doughnut } from 'react-chartjs-2'

export default function DoughChart({ chartData }) {
    return (
        <div className="chart">
            <Doughnut data={chartData} />
        </div>
    )
}
