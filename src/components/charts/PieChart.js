import { Pie } from 'react-chartjs-2'

export default function PieChart({ chartData }) {
    return (
        <div className="pie-charts">
            <div className="chart">
                <Pie data={chartData} />
            </div>
        </div>
    )
}
