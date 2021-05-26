import { Line } from 'react-chartjs-2'

export default function LineChart({ chartData }) {
    return (
        <div className="chart">
            <div className="break"></div>
            <Line data={chartData} />
        </div>
    )
}
