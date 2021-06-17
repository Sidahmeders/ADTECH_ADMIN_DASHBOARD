import RadarChart from '../../charts/RadarChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'

const getSitStaData = (data) => {
    const labels = []
    const chartData = []
    const colors = []
    let total = 0
    for (let entry in data) {
        labels.push(entry)
        chartData.push(data[entry])
        colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
        total += data[entry]
    }

    return {
        labels,
        chartData,
        colors,
        total
    }
}

export default function SitSta({ sit_sta }) {
    const { labels, chartData, colors, total } = getSitStaData(sit_sta)

    const sitStaData = {
        labels: [...labels],
        datasets: [
            {
                label: 'sit sta',
                backgroundColor: colors,
                data: [...chartData]
            }
        ]
    }

    return (
        <div>
            <Title label="sit-sta" total={total} />
            <Percentage labels={labels} data={chartData} colors={colors} />
            <RadarChart chartData={sitStaData} />
        </div>
    )
}
