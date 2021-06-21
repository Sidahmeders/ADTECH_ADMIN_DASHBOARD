import DoughChart from '../../charts/DoughChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'

export default function Sex({ sex }) {
    const labels = []
    const chartData = []
    const colors = []
    for (let entry in sex) {
        labels.push(entry)
        chartData.push(sex[entry])
        colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`)
    }

    const sexData = {
        labels: labels,
        datasets: [
            {
                backgroundColor: colors,
                data: chartData
            }
        ]
    }

    return (
        <div>
            <Title label="sex records" total={sex.female + sex.male} />
            <Percentage labels={labels} data={chartData} colors={colors} />
            <DoughChart chartData={sexData} />
        </div>
    )
}
