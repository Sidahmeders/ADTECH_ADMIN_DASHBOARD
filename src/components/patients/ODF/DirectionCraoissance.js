import PieChart from '../../charts/PieChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'

const getDirectionCraoiData = (data) => {
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

export default function DirectionCraoissance({ directionCraoissance }) {
    const { facial } = directionCraoissance
    const { labels, chartData, colors, total } = getDirectionCraoiData(facial)

    const directionCraoiData = {
        labels: [...labels],
        datasets: [
            {
                label: 'direction craoissance facial',
                backgroundColor: colors,
                data: [...chartData]
            }
        ]
    }

    return (
        <div>
            <Title label="direction craoissance" total={total} />
            <Percentage labels={labels} data={chartData} colors={colors} />
            <PieChart chartData={directionCraoiData} />
        </div>
    )
}
