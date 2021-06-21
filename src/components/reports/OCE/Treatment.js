import PieChart from '../../charts/PieChart'
import Title from '../../charts/addons/Title'
import Percentage from '../../charts/addons/Percentage'

const getTreatmentData = (data) => {
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

export default function Treatment({ treatment }) {
    const { labels, chartData, colors, total } = getTreatmentData(treatment)

    const treatmentData = {
        labels: [...labels],
        datasets: [
            {
                backgroundColor: colors,
                data: [...chartData]
            }
        ]
    }

    const perecentLabels = labels.map((label) => (label = label.substr(0, 7)))

    return (
        <div>
            <Title label="treatment" total={total} />
            <Percentage labels={perecentLabels} data={chartData} colors={colors} />
            <PieChart chartData={treatmentData} />
        </div>
    )
}
