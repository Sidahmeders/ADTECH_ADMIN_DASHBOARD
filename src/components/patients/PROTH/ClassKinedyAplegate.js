import RadarChart from '../../charts/RadarChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'

const getClassKinedyAplegateData = (data) => {
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

export default function ClassKinedyAplegate({ classKinedyAplegate }) {
    const { labels, chartData, colors, total } = getClassKinedyAplegateData(classKinedyAplegate)

    const classKinedyAplegateData = {
        labels: [...labels],
        datasets: [
            {
                label: 'class kinedy aplegate',
                backgroundColor: colors,
                data: [...chartData]
            }
        ]
    }
    return (
        <div>
            <Title label="class kinedy aplegate" total={total} />
            <Percentage labels={labels} data={chartData} colors={colors} />
            <RadarChart chartData={classKinedyAplegateData} />
        </div>
    )
}
