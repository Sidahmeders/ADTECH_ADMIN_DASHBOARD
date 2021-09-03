import PolarAreaChart from '../../charts/PolarAreaChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'

const getAgeData = (data) => {
    const labels = []
    const chartData = []
    const colors = []
    let total = 0
    for (let entry in data) {
        labels.push(`${data[entry].range} ${entry}`)
        chartData.push(data[entry].total)
        colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
        total += data[entry].total
    }

    return {
        labels,
        chartData,
        colors,
        total
    }
}

export default function Age({ age }) {
    const { labels, chartData, colors, total } = getAgeData(age)
    const percentAgeLabels = labels.map((item) => item.split(' ')[0])

    const ageData = {
        labels: [...labels],
        datasets: [
            {
                backgroundColor: colors,
                data: [...chartData]
            }
        ]
    }

    return (
        <div>
            <Title label="age records" total={total} />
            <Percentage labels={percentAgeLabels} data={chartData} colors={colors} />
            <PolarAreaChart chartData={ageData} />
        </div>
    )
}
