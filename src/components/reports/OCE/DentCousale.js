import RadarChart from '../../charts/RadarChart'
import Title from '../../charts/addons/Title'

const getDentCousaleData = (data) => {
    const labels = []
    const chartData = []
    const colors = []
    let total = 0
    for (let entry in data) {
        labels.push(entry)
        chartData.push(data[entry])
        colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}66`)
        total += data[entry]
    }

    return {
        labels,
        chartData,
        colors,
        total
    }
}

export default function DentCousale({ dent_cousale }) {
    const { labels, chartData, colors, total } = getDentCousaleData(dent_cousale)

    const dentCousaleData = {
        labels: [...labels],
        datasets: [
            {
                label: 'dent cousale',
                backgroundColor: colors,
                data: [...chartData]
            }
        ]
    }

    return (
        <div>
            <Title label="dent cousale" total={total} />
            <RadarChart chartData={dentCousaleData} />
        </div>
    )
}
