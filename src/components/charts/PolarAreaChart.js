import { PolarArea } from 'react-chartjs-2'

export default function RadarChart({ chartData }) {
    return (
        <div className="polarArea-charts">
            <div className="chart">
                <PolarArea data={chartData} />
            </div>
        </div>
    )
}
