import { Radar } from 'react-chartjs-2'

export default function RadarChart({ chartData }) {
    return (
        <div className="radar-charts">
            <div className="chart">
                <Radar data={chartData} />
            </div>
        </div>
    )
}
